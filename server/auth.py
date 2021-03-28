from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from schemas import LoginSchema, RegisterSchema
from marshmallow import ValidationError
from db import Database
from pymongo.errors import DuplicateKeyError
import jwt
import datetime
from config import JWT_KEY, JWT_TIME

auth = Blueprint('auth', __name__, url_prefix='/auth')

mongo = Database()

@auth.route('/login', methods=['POST'])
def login():
    try:
        json_data = LoginSchema().load(request.get_json())
        received_password = json_data["password"]
        db_user = mongo.users.find_one({"login": json_data["login"]}) 

        if not check_password_hash(db_user["password"], received_password):
            raise Exception("Wrong password or username")
        
        del db_user["password"]

        token = jwt.encode(
            {
                "login": db_user["login"],
                "exp": (datetime.datetime.now() + datetime.timedelta(seconds=JWT_TIME)).timestamp()
            },
            JWT_KEY
        )

        db_user["token"] = token
        return jsonify(db_user)

    except ValidationError as e:
        return jsonify(e.messages), 404

    except Exception as e:
        return jsonify({"errmsg": e.args}), 404
    


@auth.route('/register', methods=['POST'])
def register():
    try:
        json_data = RegisterSchema().load(request.get_json())
        json_data["password"] = generate_password_hash(json_data['password'])
        mongo.users.insert_one(json_data)
        return "OK", 200
    except ValidationError as e:
        return e.messages, 404

    except DuplicateKeyError as e:
        return { "errmsg": "Such user already exists!", **e.details.get("keyValue")}, 404