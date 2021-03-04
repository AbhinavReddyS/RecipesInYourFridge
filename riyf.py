import json
from db import DbInstance

class RiyfLogic:

    def ingredient_search(self, query: str) -> list:
        db_connection = DbInstance()
        #read pickle file as a json object
        #perform query processing
        #sum tfidf score of each term in query from the index for each recipe id
        #for each of recipe_id obtanined retrieve recipe info from db
        #return list of recipes
        return [query]


