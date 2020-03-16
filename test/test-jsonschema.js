const assert = require("assert");
const Validator = require('jsonschema').Validator;
const {roleGood, roleBadFeature, roleMissingName, roleMinLength} = require("../mocks/mockPermissions");
const { roleSchema } = require("../schemas/permissionSchemas");

describe("jsonSchema ", ()=> {
    const validator = new Validator();
    it("role all good", ()=> {
        const result = validator.validate(roleGood, roleSchema);
        const expected = [];
        assert.deepStrictEqual(result.errors,expected, "good role");
    });

    it("role name min length", ()=> {
        const result = validator.validate(roleMinLength, roleSchema);
        assert.deepStrictEqual(result.errors.length,1, "one error");
    });

    it("role bad name", ()=> {
        const result = validator.validate(roleMissingName, roleSchema);
        assert.deepStrictEqual(result.errors[0].property,"instance", "one error");
        assert.deepStrictEqual(result.errors[0].message,'requires property "name"', "one error");
        assert.deepStrictEqual(result.errors[0].argument,'name', "one error");
        assert.deepStrictEqual(result.errors[0].name,'required', "one error");
    });

    it("role one feature wrong", ()=> {
        const result = validator.validate(roleBadFeature, roleSchema);
        assert.deepStrictEqual(result.errors.length,1, "one error");
        assert.deepStrictEqual(result.errors[0].property,"instance.features[0]", "one error");
        assert.deepStrictEqual(result.errors[0].message,'requires property "id"', "one error");
        assert.deepStrictEqual(result.errors[0].argument,'id', "one error");
        assert.deepStrictEqual(result.errors[0].name,'required', "one error");
    });
});