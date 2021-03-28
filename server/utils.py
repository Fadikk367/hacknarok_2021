from bson import ObjectId
from flask.json import JSONEncoder, JSONDecoder

def mongo_connection_string(
    MONGO_USER, 
    MONGO_PASS, 
    MONGO_HOST,
    MONGO_OPT
):
    return \
    'mongodb+srv://%s:%s@%s/%s/consulti' \
    % (MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_OPT)


class MongoJSONEncoder(JSONEncoder):
    def default(self, o):
        # if isinstance(o, (datetime, date)):
        #     return iso.datetime_isoformat(o)
        if isinstance(o, ObjectId):
            return str(o)
        else:
            return super().default(o)

class MongoJSONDecoder(JSONDecoder):
    def decode(self, o):
        obj = super().decode(o)
        if "_id" in obj:
            obj["_id"] = ObjectId(obj["_id"])
        return obj

if __name__ == "__main__":
    pass