from functools import wraps
import jwt
from db import Database, JWT_KEY
from flask import request

def with_login(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = None

        if "x-access-tokens" in request.headers:
            token = request.headers["x-access-tokens"]
        
        if not token:
            return {"message": "Valid token is missing"}, 401
        
        current_user = None
        try:
            data = jwt.decode(
                token,
                JWT_KEY,
                algorithms="HS256"
            )

            current_user = Database().users.find_one({"login": data["login"]})
            del current_user["password"]

        except Exception as e:
            return {"message": str(e)}, 401
        
        return f(current_user, *args, **kwargs)
    
    return decorator