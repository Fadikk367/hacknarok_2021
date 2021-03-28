from bson.objectid import ObjectId
from marshmallow import Schema, fields, validate, validates_schema
from marshmallow.exceptions import ValidationError
from marshmallow.utils import INCLUDE
from Category import Category

class LoginSchema(Schema):
    login = fields.Str(
        required=True, 
        validate=validate.Email(error="Not a valid email address")
    )

    password = fields.Str(
        required=True,
        validate=[
            validate.Length(min=6, max=36)
        ]
    )
    

class RegisterSchema(LoginSchema):
    firstName = fields.Str(
        required=True,
        validate=[
            validate.Length(min=2, max=20),
            # validate.Regexp("/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u")
        ]
    )

    lastName = fields.Str(
        required=True,
        validate=[
            validate.Length(min=2, max=20),
        ]
    )


class HelpOfferSchema(Schema): 
    class Meta:
        unknown = INCLUDE 

    author = fields.Dict(
        id=fields.Method("object_id"),
        first_name=fields.Str(
            required=True,
            validate=[
                validate.Length(min=1, max=50),
            ]
        ),
        last_name=fields.Str(
            required=True,
            validate=[
                validate.Length(min=1, max=50),
            ]
        ),
        required=True
    )

    author_id = fields.Method("object_id")

    title = fields.Str(
        required=True,
        validate=[
            validate.Length(min=2, max=20),
        ]
    )

    description = fields.Str(
        required=True,
        validate=[
            validate.Length(min=2, max=20),
        ]
    )

    category = fields.Integer(
        required=True
    )

    tags = fields.List(
        fields.Str(
            required=True
        ),
        validate=[
            validate.Length(min=2, max=30)
        ]
    )

    def object_id(self, obj):
        return ObjectId(obj)

    @validates_schema
    def validate_numbers(self, data, **kwargs):
        if not Category.has_value(data["category"]):
            raise ValidationError("No such category")


class HelpRequestSchema(Schema): 
    class Meta:
        unknown = INCLUDE 

    author = fields.Dict(
        id=fields.Function(lambda obj: ObjectId(obj)),
        first_name=fields.Str(
            required=True,
            validate=[
                validate.Length(min=1, max=50),
            ]
        ),
        last_name=fields.Str(
            required=True,
            validate=[
                validate.Length(min=1, max=50),
            ]
        ),
        required=True
    )

    title = fields.Str(
        required=True,
        validate=[
            validate.Length(min=2, max=20),
        ]
    )

    description = fields.Str(
        required=True,
        validate=[
            validate.Length(min=2, max=1000),
        ]
    )

    category = fields.Integer(
        required=True
    )

    tags = fields.List(
        fields.Str(
            required=True
        ),
        validate=[
            validate.Length(min=2, max=30)
        ]
    )

    date = fields.Str(
        required=True,
    )

    @validates_schema
    def validate_numbers(self, data, **kwargs):
        if not Category.has_value(data["category"]):
            raise ValidationError("No such category")

class MessageSchema(Schema):
    class Meta:
        unknown = INCLUDE 

    author = fields.Dict(
        id=fields.Function(lambda obj: ObjectId(obj)),
        first_name=fields.Str(
            required=True,
            validate=[
                validate.Length(min=1, max=50),
            ]
        ),
        last_name=fields.Str(
            required=True,
            validate=[
                validate.Length(min=1, max=50),
            ]
        ),
        required=True
    )

    help_offer_id = fields.Function(lambda obj: ObjectId(obj))

    date = fields.Str(
        required=True,
        validate=[
            validate.Length(min=8, max=10),
        ]
    )

    hour = fields.Str(
        required=True,
        validate=[
            validate.Length(min=3, max=5),
        ]
    )
    
    platform = fields.Str(
        required=True,
        validate=[
            validate.Length(min=0, max=100),
        ]
    )

    comment = fields.Str(
        required=True,
        validate=[
            validate.Length(min=0, max=5000),
        ]
    )

class ConsultationSchema(Schema):
    class Meta:
        unknown = INCLUDE 

    author = fields.Dict(
        id=fields.Function(lambda obj: ObjectId(obj)),
        first_name=fields.Str(
            required=True,
            validate=[
                validate.Length(min=1, max=50),
            ]
        ),
        last_name=fields.Str(
            required=True,
            validate=[
                validate.Length(min=1, max=50),
            ]
        ),
        required=True
    )

    help_offer_id = fields.Function(lambda obj: ObjectId(obj))

    date = fields.Str(
        required=True,
        validate=[
            validate.Length(min=8, max=10),
        ]
    )

    hour = fields.Str(
        required=True,
        validate=[
            validate.Length(min=3, max=5),
        ]
    )

    platform = fields.Str(
        required=True,
        validate=[
            validate.Length(min=0, max=100),
        ]
    )