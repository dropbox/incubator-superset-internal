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
from flask_appbuilder import ModelRestApi
from flask_appbuilder.models.sqla.interface import SQLAInterface
from flask_babel import lazy_gettext as _
from marshmallow import UnmarshalResult

from superset import security_manager
from superset.connectors.sqla import models


class TableRestApi(ModelRestApi):
    resource_name = "table"
    datamodel = SQLAInterface(models.SqlaTable)

    class_permission_name = "TableModelView"
    method_permission_name = {
        "get_list": "list",
        "get": "show",
        "post": "add",
        "put": "edit",
        "delete": "delete",
        "info": "list",
    }
    allow_browser_login = True

    def pre_add(self, item: models.SqlaTable) -> None:
        try:
            item.get_sqla_table_object()
        except Exception:
            raise Exception(_(f"Table {item.full_name} could not be found."))

    def post_add(self, item: models.SqlaTable) -> None:
        item.fetch_metadata()
        security_manager.add_permission_view_menu("datasource_access", item.get_perm())
        if item.schema:
            security_manager.add_permission_view_menu("schema_access", item.schema_perm)

    def post_update(self, item: UnmarshalResult) -> None:
        self.post_add(item.data)
