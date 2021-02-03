import pymongo
import json

class DbInstance:
    db_client = pymongo.MongoClient('mongodb+srv://admin:admin@cluster0.13snx.mongodb.net/<dbname>?retryWrites=true&w=majority')  

    def get_data(self):
        rest_collection = self.db_client.get_database('sample_restaurants').restaurants
        data = list(rest_collection.find())
        return data
        #db_client = pymongo.MongoClient('mongodb+srv://admin:admin@cluster0.13snx.mongodb.net/<dbname>?retryWrites=true&w=majority')
        #self.db_sample1 = db_client.get_database('sample_restaurants')


