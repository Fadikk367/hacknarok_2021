from flask import Blueprint, request
from marshmallow.exceptions import ValidationError
from Category import Category
from schemas import HelpOfferSchema, HelpRequestSchema
from with_login import with_login
import json

res = Blueprint('resources', __name__, url_prefix='/api/resources')

@res.route('/')
def hello():
    return "Hello World!"


@res.route('/help-offer', methods=['GET', 'POST'])
def help_offer():
    if request.method == 'POST':
        try:
            return HelpOfferSchema().load(request.get_json())
        except ValidationError as e:
            return e.messages, 404

    if request.method == 'GET':

        return "help-offer GET"

@res.route('/help-request', methods=['GET', 'POST'])
def help_request():
    if request.method == 'POST':
        try:
            return HelpRequestSchema().load(request.get_json())
        except ValidationError as e:
            return e.messages, 404

    if request.method == 'GET':
        return "help-request GET"

@res.route('/categories', methods=['GET'])
@with_login
def get_categories(current_user):
    # return current_user
    return json.dumps(vars(Category)['_member_names_'])