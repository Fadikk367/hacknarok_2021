from flask import Blueprint, request

auth = Blueprint('auth', __name__, url_prefix='/auth')


@auth.route('/login', methods=['POST'])
def login():
    json_data = request.get_json()
    email = json_data['email']
    password = json_data['password']

    return f'email = {email}, password = {password}'

@auth.route('/register', methods=['POST'])
def register():
    json_data = request.get_json()
    email = json_data['email']
    password = json_data['password']
    first_name = json_data['firstName']
    last_name = json_data['lastName']

    return f'email = {email}, password = {password}, first_name = {first_name}, last_name = {last_name}'
