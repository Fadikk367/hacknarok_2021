from flask import Blueprint, request
from marshmallow.exceptions import ValidationError
from Category import Category
from schemas import HelpOfferSchema, HelpRequestSchema
from with_login import with_login
from flask import jsonify

res = Blueprint('resources', __name__, url_prefix='/api/resources')
db = Database()

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
        result = list(db.ffers.find(query))
        return jsonify(result)

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
        result = list(db.requests.find(query))
        return jsonify(result)

@res.route('/categories', methods=['GET'])
def get_categories():
    return jsonify(vars(Category)['_member_names_'])
