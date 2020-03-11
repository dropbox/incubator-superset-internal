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
import re
from copy import copy
from datetime import datetime, timedelta
from functools import partial
from typing import SupportsInt

from superset.config import *  # type: ignore
from superset.jinja_context import PrestoTemplateProcessor

AUTH_USER_REGISTRATION_ROLE = "alpha"
SQLALCHEMY_DATABASE_URI = "sqlite:///" + os.path.join(DATA_DIR, "unittests.db")
DEBUG = True
SUPERSET_WEBSERVER_PORT = 8081

# Allowing SQLALCHEMY_DATABASE_URI to be defined as an env var for
# continuous integration
if "SUPERSET__SQLALCHEMY_DATABASE_URI" in os.environ:
    SQLALCHEMY_DATABASE_URI = os.environ["SUPERSET__SQLALCHEMY_DATABASE_URI"]

SQL_MAX_ROW = 666
SQLLAB_CTA_NO_LIMIT = True  # SQL_MAX_ROW will not take affect for the CTA queries
FEATURE_FLAGS = {"foo": "bar"}


def GET_FEATURE_FLAGS_FUNC(ff):
    ff_copy = copy(ff)
    ff_copy["super"] = "set"
    return ff_copy


TESTING = True
SECRET_KEY = "thisismyscretkey"
WTF_CSRF_ENABLED = False
PUBLIC_ROLE_LIKE_GAMMA = True
AUTH_ROLE_PUBLIC = "Public"
EMAIL_NOTIFICATIONS = False

CACHE_CONFIG = {"CACHE_TYPE": "simple"}


class CeleryConfig(object):
    BROKER_URL = "redis://localhost"
    CELERY_IMPORTS = ("superset.sql_lab",)
    CELERY_ANNOTATIONS = {"sql_lab.add": {"rate_limit": "10/s"}}
    CONCURRENCY = 1


CELERY_CONFIG = CeleryConfig

RESULTS_BACKEND_USE_MSGPACK = True


def DATE(
    ts: datetime, day_offset: SupportsInt = 0, hour_offset: SupportsInt = 0
) -> str:
    """Current day as a string"""
    day_offset, hour_offset = int(day_offset), int(hour_offset)
    offset_day = (ts + timedelta(days=day_offset, hours=hour_offset)).date()
    return str(offset_day)


class CustomPrestoTemplateProcessor(PrestoTemplateProcessor):
    """A custom presto template processor for test."""

    engine = "presto"

    def process_template(self, sql: str, **kwargs) -> str:
        """Processes a sql template with $ style macro using regex."""
        # Add custom macros functions.
        macros = {"DATE": partial(DATE, datetime.utcnow())}  # type: Dict[str, Any]
        # Update with macros defined in context and kwargs.
        macros.update(self.context)
        macros.update(kwargs)

        def replacer(match):
            """Expands $ style macros with corresponding function calls."""
            macro_name, args_str = match.groups()
            args = [a.strip() for a in args_str.split(",")]
            if args == [""]:
                args = []
            f = macros[macro_name[1:]]
            return f(*args)

        macro_names = ["$" + name for name in macros.keys()]
        pattern = r"(%s)\s*\(([^()]*)\)" % "|".join(map(re.escape, macro_names))
        return re.sub(pattern, replacer, sql)


CUSTOM_TEMPLATE_PROCESSOR = {
    CustomPrestoTemplateProcessor.engine: CustomPrestoTemplateProcessor
}
