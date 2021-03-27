from utils import env
import pymongo

class Database:
    def __init__(self, dbname="consulti"):
        self.__connection_string = env()
        self.dbname = dbname

    @property
    def db(self): 
        return pymongo.MongoClient(self.__connection_string)[self.dbname]
    
    @property
    def users(self):
        return self.db.users

    @property
    def offers(self):
        return self.db["help-offers"]
    
    @property
    def requests(self):
        return self.db["help-requests"]