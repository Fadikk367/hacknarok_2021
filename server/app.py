from flask import Flask
from resources import res 
from auth import auth
from utils import MongoJSONEncoder

app = Flask(__name__)

app.json_encoder = MongoJSONEncoder

app.register_blueprint(res)
app.register_blueprint(auth)

if __name__ == '__main__':
    app.run()
