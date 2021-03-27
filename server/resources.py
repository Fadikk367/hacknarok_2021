from flask import Blueprint, request
from marshmallow.exceptions import ValidationError
from Category import Category
from schemas import HelpOfferSchema, HelpRequestSchema
from db import Database
import bson.json_util as json_util

db = Database().db

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
        tags = request.args.getlist('tags')
        return json_util.dumps(list(db["help-offers"].find({'tags': {'$all': tags}})))

@res.route('/help-request', methods=['GET', 'POST'])
def help_request():
    if request.method == 'POST':
        try:
            return HelpRequestSchema().load(request.get_json())
        except ValidationError as e:
            return e.messages, 404

    if request.method == 'GET':
        tags = request.args.getlist('tags')
        return json_util.dumps(list(db["help-requests"].find({'tags': {'$all': tags}})))

@res.route('/categories', methods=['GET'])
def get_categories():
    return json_util.dumps(vars(Category)['_member_names_'])