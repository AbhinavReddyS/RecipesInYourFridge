import json
from db import DbInstance

class RiyfLogic:

    def get_data(self):
        db_connection = DbInstance()
        return db_connection.get_data()[0]


