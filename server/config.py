
import os
from dotenv import load_dotenv
from utils import mongo_connection_string 

load_dotenv()

MONGO_USER = os.getenv("MONGO_USER")
MONGO_PASS = os.getenv("MONGO_PASS")
MONGO_HOST =  os.getenv("MONGO_HOST")
MONGO_OPT = os.getenv("MONGO_OPT")
MONGO_DBNAME = os.getenv("MONGO_DBNAME")
MONGO_STR = mongo_connection_string(
    MONGO_USER, 
    MONGO_PASS, 
    MONGO_HOST,
    MONGO_OPT)

JWT_KEY = os.getenv("JWT_KEY")
JWT_TIME = int(os.getenv("JWT_TIME"))