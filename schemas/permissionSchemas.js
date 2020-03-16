
const featureSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Feature",
    "type": "object",
    "required": [
        "id",
        "name",
        "desc"
    ],
    "properties": {
        "id": {
            "type": "integer",
            "description": "id of the feature",
            "minimum": 1
        },
        "name": {
            "type": "string",
            "description": "short name",
            "minLength": 3
        },
        "desc": {
            "type": "string",
            "description": "description",
            "minLength": 3
        }
    }
};

const roleSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Roles",
    "type": "object",
    "required": [
        "name",
        "desc"
    ],
    "properties": {
        "name": {
            "type": "string",
            "description": "short name",
            "minLength": 3
        },
        "desc": {
            "type": "string",
            "description": "description",
            "minLength": 3
        },
        "features": {
            "type": "array",
            "description": "Features that give access to resources",
            "items": featureSchema
        }
    }
};

module.exports = {featureSchema, roleSchema};