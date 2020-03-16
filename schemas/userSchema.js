

module.exports = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "User",
    "type": "object",
    "required": [
        "source",
        "ad",
        "hasLoggedIn",
        "createdBy",
        "createdOn",
        "modifiedBy",
        "modifiedOn",
        "roleIds"
    ],
    "properties": {
        "source": {
            "type": "string",
            "description": "Source of the user",
            "minLength": 2
        },
        "roleIds": {
            "type": "array",
            "description": "Role ids that give access to resources",
            "items": {
                "type": "string"
            },
            //"minItems": 1,
            "uniqueItems": true
        },
        "ad": {
            "description": "Active Directory Object",
            "type": "object",
            "required": [
                "id",
                "givenName",
                "surname",
                "mail"
            ]
        }
    }
};