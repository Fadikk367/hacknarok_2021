from flask import Blueprint, request

apiv1 = Blueprint('api', __name__, url_prefix='/api/v1')


@apiv1.route('/')
def hello():
    return "Hello World!"

@apiv1.route('/auth/login', methods=['POST'])
def login():
    return "auth login"

@apiv1.route('/auth/register', methods=['POST'])
def register():
    return "auth register"

@apiv1.route('/help-offer', methods=['GET', 'POST'])
def help_offer():
    if request.method == 'POST':
        return "help-offer post"
    if request.method == 'GET':
        return "help-offer GET"

@apiv1.route('/help-request', methods=['GET', 'POST'])
def help_request():
    if request.method == 'POST':
        return "help-request post"
    if request.method == 'GET':
        return "help-request GET"