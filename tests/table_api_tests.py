# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
"""Unit tests for Superset"""
import json

from superset import db
from superset.connectors.sqla.models import SqlaTable

from .base_tests import SupersetTestCase


class TableApiTests(SupersetTestCase):
    resource_name = "table"

    def __init__(self, *args, **kwargs):
        super(TableApiTests, self).__init__(*args, **kwargs)

    def _get_table(self, user="admin"):
        """Helper function to send GET /table​/ request with given user and verify it succeeds."""
        self.login(username=user)
        uri = f"api/v1/table/"
        rv = self.client.get(uri)
        self.assertEqual(rv.status_code, 200)
        data = json.loads(rv.data.decode("utf-8"))
        self.assertEqual(data["count"], 6)

    def _create_table(self, user="admin"):
        """Helper function to send POST /table/ request with given user and verify it succeeds."""
        # Create a table via POST /table/ API and verify it succeeds with 201 CREATED.
        tbl_name = "bart_lines"
        self.login(username=user)
        table_data = {"database": 1, "table_name": tbl_name}
        uri = f"api/v1/table/"
        rv = self.client.post(uri, json=table_data)
        self.assertEqual(rv.status_code, 201)
        tbl_obj = self.get_table_by_name(tbl_name)
        self.assertIsNotNone(tbl_obj)
        self.assertEqual(tbl_obj.table_name, tbl_name)

        # Clean up the temporarily created table.
        db.session.delete(tbl_obj)
        db.session.commit()

    def _delete_table(self, user="admin"):
        """Helper function to send DELETE /table/{pk} request with given user and verity it succeeds."""
        # Create a temp table.
        from superset.utils.core import get_example_database

        tbl_name = "bart_lines"
        database = get_example_database()
        tbl = SqlaTable(table_name=tbl_name)
        tbl.database = database
        db.session.merge(tbl)
        db.session.commit()

        # Make sure we have `bart_line` table created.
        tbl_obj = self.get_table_by_name(tbl_name)
        self.assertIsNotNone(tbl_obj)

        # Send DELETE /table​/{pk} request.
        self.login(username=user)
        uri = f"api/v1/table/{tbl_obj.id}"
        rv = self.client.delete(uri)
        self.assertEqual(rv.status_code, 200)

        # Verify the table is deleted.
        model = db.session.query(SqlaTable).get(tbl_obj.id)
        self.assertEqual(model, None)

    def _update_table(self, user="admin"):
        """Helper function to send PUT /table/{pk} request with given user and verify it succeeds."""
        # Send PUT /table​/{pk} request, verify it succeeds with 200.
        tbl_name = "birth_names"
        model = db.session.query(SqlaTable).filter_by(table_name=tbl_name).one()
        table_id = model.id
        self.login(username=user)
        table_data = {"description": ""}
        uri = f"api/v1/table/{table_id}"
        rv = self.client.put(uri, json=table_data)
        self.assertEqual(rv.status_code, 200)

        # Verify the table is updated.
        model = self.get_table_by_name(tbl_name)
        self.assertEqual(model.description, "")

    def test_get_table_admin(self):
        """Table API: Test get table with admin."""
        self._get_table(user="admin")

    def test_get_table_alpha(self):
        """Table API: Test get table with alpha."""
        # Verify Alpha role has read permission.
        self._get_table(user="alpha")

    def test_get_table_gamma(self):
        """Table API: Test get table with gamma."""
        # Verify Gamma role has read permission.
        self._get_table(user="gamma")

    def test_get_table_pk(self):
        """Table API: Test get table on pk."""
        # Send GET /table​/{pk} request.
        tbl_name = "birth_names"
        tbl_obj = db.session.query(SqlaTable).filter_by(table_name=tbl_name).one()
        table_id = tbl_obj.id
        self.login(username="admin")
        uri = f"api/v1/chart/{table_id}"
        rv = self.client.get(uri)
        self.assertEqual(rv.status_code, 200)

    def test_get_table_pk_not_found(self):
        """Table API: Test get table on pk not found."""
        # Send GET /table​/{pk} request on a non-existent pk.
        table_id = 1000
        self.login(username="admin")
        uri = f"api/v1/chart/{table_id}"
        rv = self.client.get(uri)
        self.assertEqual(rv.status_code, 404)

    def test_create_table_admin(self):
        """Table API: Test create table with admin."""
        self._create_table(user="admin")

    def test_create_table_alpha(self):
        """Table API: Test create table with alpha."""
        self._create_table(user="alpha")

    def test_create_table_existed(self):
        """Table API: Test create table already existed."""
        # Try to create a able already existed, verify it fails.
        tbl_name = "birth_names"
        self.login(username="admin")
        table_data = {"database": 1, "table_name": tbl_name}
        uri = f"api/v1/table/"
        rv = self.client.post(uri, json=table_data)
        self.assertEqual(rv.status_code, 422)
        tbl_obj = self.get_table_by_name(tbl_name)
        self.assertIsNotNone(tbl_obj)
        self.assertEqual(tbl_obj.table_name, tbl_name)

    def test_create_table_gamma_no_perm(self):
        """Table API: Test create table with gamma."""
        # Send POST /table​/ request, verify gamma user has no permission.
        tbl_name = "bart_lines"
        self.login(username="gamma")
        table_data = {"database": 1, "table_name": tbl_name}
        uri = f"api/v1/table/"
        rv = self.client.post(uri, json=table_data)
        self.assertEqual(rv.status_code, 401)

    def test_delete_table_admin(self):
        """Table API: Test delete with admin."""
        self._delete_table(user="admin")

    def test_delete_table_alpha(self):
        """Table API: Test delete with alpha."""
        self._delete_table(user="alpha")

    def test_delete_table_gamma_no_perm(self):
        """Table API: Test delete with gamma no permission."""
        # Send DELETE /table/{pk}, verify it returns 401 for gamma user.
        tbl_name = "birth_names"
        tbl_obj = db.session.query(SqlaTable).filter_by(table_name=tbl_name).one()
        table_id = tbl_obj.id
        self.login(username="gamma")
        uri = f"api/v1/table/{table_id}"
        rv = self.client.delete(uri)
        self.assertEqual(rv.status_code, 401)

    def test_delete_table_not_existed(self):
        """Table API: Test delete table not existed."""
        # Try to delete a non-existent table, verify it fails.
        table_id = 1000
        self.login(username="admin")
        uri = f"api/v1/table/{table_id}"
        rv = self.client.delete(uri)
        self.assertEqual(rv.status_code, 404)

    def test_update_table_admin(self):
        """Table API: Test update table with admin."""
        self._update_table(user="admin")

    def test_update_table_alpha(self):
        """Table API: Test update table with alpha."""
        self._update_table(user="alpha")

    def test_update_table_gamma_no_perm(self):
        """Table API: Test update table with gamma no permission."""
        # Send PUT /table​/{pk} request, verify gamma user has no permission.
        tbl_name = "birth_names"
        tbl_obj = db.session.query(SqlaTable).filter_by(table_name=tbl_name).one()
        table_id = tbl_obj.id
        self.login(username="gamma")
        table_data = {"description": ""}
        uri = f"api/v1/table/{table_id}"
        rv = self.client.put(uri, json=table_data)
        self.assertEqual(rv.status_code, 401)

    def test_update_table_not_existed(self):
        """Table API: Test update table not existed."""
        # Try to update a non-existent table, verify it fails.
        table_id = 1000
        self.login(username="admin")
        uri = f"api/v1/table/{table_id}"
        rv = self.client.put(uri, json={})
        self.assertEqual(rv.status_code, 404)
