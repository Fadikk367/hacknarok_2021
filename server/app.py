from flask import Flask
from resources import res 
from auth import auth
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.register_blueprint(res)
app.register_blueprint(auth)

if __name__ == '__main__':
    app.run()
