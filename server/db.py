from flask import current_app 
from config import MONGO_DBNAME, MONGO_STR, JWT_KEY
import pymongo

class Database:
    def __init__(self, dbname="consulti"):
        self.dbname = MONGO_DBNAME

    @property
    def db(self): 
        return pymongo.MongoClient(MONGO_STR)[self.dbname]
    
    @property
    def users(self):
        return self.db.users

    @property
    def offers(self):
        return self.db["help-offers"]
    
    @property
    def requests(self):
        return self.db["help-requests"]

    @property
    def messages(self):
        return self.db["messages"]

    @property
    def consultations(self):
        return self.db["consultations"]