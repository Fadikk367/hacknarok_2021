from flask import Flask
from api import apiv1

app = Flask(__name__)

app.register_blueprint(apiv1)

if __name__ == '__main__':
    app.run()
