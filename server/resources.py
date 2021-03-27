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
        category = request.args.get('category')
        query = {}
        if(tags):
            query['tags'] = {'$all': tags}
        if(category):
            query['category'] = category
        result = list(db["help-offers"].find(query))
        return json_util.dumps(result)

@res.route('/help-request', methods=['GET', 'POST'])
def help_request():
    if request.method == 'POST':
        try:
            return HelpRequestSchema().load(request.get_json())
        except ValidationError as e:
            return e.messages, 404

    if request.method == 'GET':
        tags = request.args.getlist('tags')
        category = request.args.get('category')
        query = {}
        if(tags):
            query['tags'] = {'$all': tags}
        if(category):
            query['category'] = category
        result = list(db["help-requests"].find(query))
        return json_util.dumps(result)

@res.route('/categories', methods=['GET'])
def get_categories():
    return json_util.dumps(vars(Category)['_member_names_'])