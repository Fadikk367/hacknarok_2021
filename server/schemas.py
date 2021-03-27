from marshmallow import Schema, fields, validate, validates_schema
from marshmallow.exceptions import ValidationError
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
    author_id = fields.Str(
        required=True,
        validate=[
            validate.Length(equal=24)
        ]
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

    @validates_schema
    def validate_numbers(self, data, **kwargs):
        if not Category.has_value(data["category"]):
            raise ValidationError("No such category")


class HelpRequestSchema(Schema): 
    author_id = fields.Str(
        required=True,
        validate=[
            validate.Length(equal=24)
        ]
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

    @validates_schema
    def validate_numbers(self, data, **kwargs):
        if not Category.has_value(data["category"]):
            raise ValidationError("No such category")