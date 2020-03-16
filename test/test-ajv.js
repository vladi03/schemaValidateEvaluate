const assert = require("assert");
const Ajv = require('ajv');
// noinspection JSUnusedLocalSymbols
const {roleGood, roleBadFeature, roleMissingName, roleMinLength} = require("../mocks/mockPermissions");
const { roleSchema } = require("../schemas/permissionSchemas");

describe("ajv validator", ()=> {
    const schemaValidator = new Ajv(); // options can be passed, e.g. {allErrors: true}
    schemaValidator.addSchema(roleSchema, "role");

    it("role all good", ()=> {
        const result = schemaValidator.validate("role", roleGood);
        assert.ok(result, "all good");
    });

    it("role name min length", ()=> {
        const result = schemaValidator.validate("role",roleMinLength);
        const expected = {
            "dataPath": ".name",
            "keyword": "minLength",
            "message": "should NOT be shorter than 3 characters",
            "params": {
                "limit": 3
            },
            "schemaPath": "#/properties/name/minLength"
        };
        assert.ok(!result, "fails good");
        assert.deepStrictEqual(schemaValidator.errors.length,1, "one error");
        assert.deepStrictEqual(schemaValidator.errors[0], expected, "one error");
    });

    it("role bad feature", ()=> {
        const result = schemaValidator.validate("role",roleBadFeature);
        const expected = {
            "dataPath": ".features[0]",
            "keyword": "required",
            "message": "should have required property 'id'",
            "params": {
                "missingProperty": "id"
            },
            "schemaPath": "#/properties/features/items/required"
        };
        assert.ok(!result, "fails good");
        assert.deepStrictEqual(schemaValidator.errors.length, 1, "one error");
        assert.deepStrictEqual(schemaValidator.errors[0],expected, "one error");
    });
});