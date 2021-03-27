from marshmallow import Schema, fields, validate

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

    category = fields.Str(
        required=True,
        validate=[
            validate.Length(min=2, max=20),
        ]
    )
    tags = fields.List(
        fields.Str(
            required=True
        ),
        validate=[
            validate.Length(min=2, max=30)
        ]
    )



class HelpRequestSchema(Schema): 
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

    category = fields.Str(
        required=True,
        validate=[
            validate.Length(min=2, max=20),
        ]
    )
    tags = fields.List(
        fields.Str(
            required=True
        ),
        validate=[
            validate.Length(min=2, max=30)
        ]
    )
