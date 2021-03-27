from flask import Blueprint, request
from werkzeug.security import generate_password_hash
from schemas import LoginSchema, RegisterSchema
from marshmallow import ValidationError

auth = Blueprint('auth', __name__, url_prefix='/auth')


@auth.route('/login', methods=['POST'])
def login():
    try:
        json_data = LoginSchema().load(request.get_json())
        json_data["password"] = generate_password_hash(json_data['password'])
        return json_data
    except ValidationError as e:
        return e.messages, 404

@auth.route('/register', methods=['POST'])
def register():
    try:
        json_data = RegisterSchema().load(request.get_json())
        json_data["password"] = generate_password_hash(json_data['password'])
        return json_data
    except ValidationError as e:
        return e.messages, 404
