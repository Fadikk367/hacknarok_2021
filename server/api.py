from flask import Blueprint

apiv1 = Blueprint('api', __name__, url_prefix='/api/v1')


@apiv1.route('/')
def hello():
    return "Hello World!"