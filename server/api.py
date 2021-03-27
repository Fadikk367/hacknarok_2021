from flask import Blueprint, request

apiv1 = Blueprint('api', __name__, url_prefix='/api/v1')


@apiv1.route('/')
def hello():
    return "Hello World!"

@apiv1.route('/auth/login', methods=['POST'])
def login():
    json_data = request.get_json()
    email = json_data['email']
    password = json_data['password']

    return f'email = {email}, password = {password}'

@apiv1.route('/auth/register', methods=['POST'])
def register():
    json_data = request.get_json()
    email = json_data['email']
    password = json_data['password']
    first_name = json_data['firstName']
    last_name = json_data['lastName']

    return f'email = {email}, password = {password}, first_name = {first_name}, last_name = {last_name}'

@apiv1.route('/help-offer', methods=['GET', 'POST'])
def help_offer():
    if request.method == 'POST':
        json_data = request.get_json()
        title = json_data['title']
        description = json_data['description']
        category = json_data['category']
        tags = json_data['tags']

        return f'title = {title}, description = {description}, category = {category}, tags = {tags}'

    if request.method == 'GET':

        return "help-offer GET"

@apiv1.route('/help-request', methods=['GET', 'POST'])
def help_request():
    if request.method == 'POST':
        json_data = request.get_json()
        title = json_data['title']
        description = json_data['description']
        category = json_data['category']
        tags = json_data['tags']

        return f'title = {title}, description = {description}, category = {category}, tags = {tags}'
    if request.method == 'GET':
        return "help-request GET"