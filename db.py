import pymongo
import json
from bson import json_util, ObjectId

class DbInstance:
    db_client = pymongo.MongoClient('mongodb+srv://admin:admin@cluster0.13snx.mongodb.net/<dbname>?retryWrites=true&w=majority')
    db = db_client["RIYF"] #Variable for RIYF DB. (Creates DB at first instance )
    col = db["recipes"] #Recipes Collection
    ing_col = db["Ingredients"] #Ingredients Collection


    #Fetches all recipes from DB
    def get_recipe(self, lst_recipe_id):
        return json.loads(json_util.dumps(self.col.find({"id" : {"$in":lst_recipe_id}})))

    #Fetches all ingredients from DB
    def get_ingredients(self):
        return list(self.ing_col.find())

    #Fetches all recipes from DB
    def get_recipes(self):
        return list(self.col.find())

    #Upload all Ingredients to the DB
    def upload_ingredients(self):
        f = open('ingredients.json','r')
        data = json.loads(f.read())
        self.ing_col.insert_many(data)

    #Upload all Recipes to the DB
    def upload_recipes(self):
        f = open('recipes.json', 'r')
        data = json.loads(f.read())
        self.col.insert_many(data)

    #delete Recipes collection in DB
    def delete_recipe_col(self):
        return self.col.drop()

    #delete Ingredients collection in DB
    def delete_ingredient_col(self):
        return self.ing_col.drop()


