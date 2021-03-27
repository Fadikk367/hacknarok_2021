from flask import Blueprint, request
from Category import Category
import json

res = Blueprint('resources', __name__, url_prefix='/api/resources')

@res.route('/')
def hello():
    return "Hello World!"


@res.route('/help-offer', methods=['GET', 'POST'])
def help_offer():
    if request.method == 'POST':
        json_data = request.get_json()
        title = json_data['title']
        description = json_data['description']
        category = Category[json_data['category']]
        tags = json_data['tags']

        return f'title = {title}, description = {description}, category = {category}, tags = {tags}'

    if request.method == 'GET':

        return "help-offer GET"

@res.route('/help-request', methods=['GET', 'POST'])
def help_request():
    if request.method == 'POST':
        json_data = request.get_json()
        title = json_data['title']
        description = json_data['description']
        category = Category[json_data['category']]
        tags = json_data['tags']

        return f'title = {title}, description = {description}, category = {category}, tags = {tags}'
    if request.method == 'GET':
        return "help-request GET"

@res.route('/categories', methods=['GET'])
def get_categories():
    return json.dumps(vars(Category)['_member_names_'])