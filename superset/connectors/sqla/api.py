from superset.connectors.sqla import models
from flask_appbuilder import ModelRestApi
from flask_appbuilder.models.sqla.interface import SQLAInterface


class TableRestApi(ModelRestApi):
    resource_name = 'table'
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
