from flask import Blueprint, request
from marshmallow.exceptions import ValidationError
from bson import ObjectId
from Category import Category
from schemas import HelpOfferSchema, HelpRequestSchema
from with_login import with_login
from db import Database
from flask import jsonify

res = Blueprint('resources', __name__, url_prefix='/api/resources')
db = Database()

@res.route('/')
def hello():
    return "Hello World!"


@res.route('/help-offer', methods=['GET', 'POST', 'DELETE'])
def help_offer():

    if request.method == 'GET':
        tags = request.args.getlist('tags')
        category = request.args.get('category')
        query = {}
        if(tags):
            query['tags'] = {'$all': tags}
        if(category):
            query['category'] = category
        result = list(db.offers.find(query))
        return jsonify(result)

    if request.method == 'POST':
        @with_login
        def post(current_user):
            try:
                offer = { "author_id": current_user["_id"], **request.get_json()}
                offer = HelpOfferSchema().load(offer)
                id = db.offers.insert_one(offer).inserted_id
                inserted_doc = db.offers.find_one({ "_id": id })

                return jsonify(inserted_doc), 200

            except ValidationError as e:
                return jsonify(e.messages), 404

            except Exception as e:
                return jsonify(e)
        
        return post()

    if request.method == 'DELETE':
        @with_login
        def delete(current_user):
            try:
                received_data = request.get_json()
                to_delete = db.offers.find_one(received_data)

                if not to_delete:
                    raise Exception("Not found this record") 

                if to_delete["author_id"] != current_user["_id"]:
                    raise Exception("Your are not permitted to delete this record.")

                result = db.offers.delete_one(received_data)

                return { "msg": "OK", "deleted": result.deleted_count}, 200
            
            except Exception as e:
                return {"errmsg": str(e)}, 404

        return delete()

@res.route('/help-request', methods=['GET', 'POST', 'DELETE'])
def help_request():

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

    if request.method == 'POST':
        @with_login
        def post(current_user):
            try:
                print(request.get_json())
                help_request_data = {"author_id": current_user["_id"], **request.get_json()}
                help_request_data = HelpRequestSchema().load(help_request_data)
                print(help_request_data)
                id = db.requests.insert_one(help_request_data).inserted_id
                print(id)
                inserted_doc = db.requests.find_one({ "_id": id })
                print(inserted_doc)
                return jsonify(inserted_doc), 200

            except ValidationError as e:
                return jsonify(e.messages), 404

        return post()

    if request.method == 'DELETE':
        @with_login
        def delete(current_user):
            try:
                received_data = request.get_json()
                to_delete = db.requests.find_one(received_data)

                if not to_delete:
                    raise Exception("Not found this record") 

                if to_delete["author_id"] != current_user["_id"]:
                    raise Exception("Your are not permitted to delete this record.")
                
                print(received_data)
                result = db.requests.delete_one(received_data)

                return { "msg": "OK", "deleted": result.deleted_count}, 200

            except Exception as e:
                return {"errmsg": str(e)}, 404

        return delete()


@res.route('/categories', methods=['GET'])
def get_categories():
    return jsonify({ "categories": (vars(Category)['_member_names_'])})
