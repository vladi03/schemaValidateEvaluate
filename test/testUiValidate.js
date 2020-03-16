const assert = require("assert");
const {validateField, convertToValidationState} = require("../uiValidate");
// noinspection JSUnusedLocalSymbols
const {roleGood, roleBadFeature, roleMissingName, roleMinLength,
    roleAllWrong} = require("../mocks/mockPermissions");
describe("ui validation without prev state", ()=> {
    it("bad Roles Name, target name", ()=> {
        const result = validateField(roleMinLength, "name", "role");
        const expected = {"name" : "should NOT be shorter than 3 characters"};
        assert.deepStrictEqual(result, expected, "fail message for name");
    });

    it("bad Roles Name, target different", ()=> {
        const result = validateField(roleMinLength, "desc", "role");
        assert.deepStrictEqual(result, {"desc": ""}, "no results");
    });

    it("bad Roles Name, target different", ()=> {
        const result = validateField(roleBadFeature, "features", "role");
        assert.deepStrictEqual(result, {"features": "should have required property 'id'"}, "no results");
    });

    it("many bad in Role", () => {
        const result = validateField(roleAllWrong, "name", "role");
        assert.deepStrictEqual(result, {"name": "required"}, "complex");
    });
});

describe("ui validation with prev state", ()=> {
    it("bad Roles Name, target name", ()=> {
        const prevState = {"name": "has some error", "desc" : "has other error"};
        const result = validateField(roleMinLength, "name", "role", prevState);
        const expected = {
            "name" : "should NOT be shorter than 3 characters",
            "desc" : "has other error"
        };
        assert.deepStrictEqual(result, expected, "should clear other errors that are no longer valid");
    });

    it("bad Roles Name, target different", ()=> {
        const prevState = {"name": "has some error", "desc" : "has other error"};
        const result = validateField(roleMinLength, "desc", "role", prevState);
        const expected = {"name" : "has some error", "desc" : ""};

        assert.deepStrictEqual(result, expected, "should keep prev error result");
    });
});

describe("role Good", ()=> {
    it("bad Roles Name, target name", ()=> {
        const result = validateField(roleGood, "name", "role");
        assert.deepStrictEqual(result, {"name": ""}, "empty object");
    });

    it("bad Roles Name, target name", ()=> {
        const prevState = {"name": "has some error", "desc" : "has other error"};
        const result = validateField(roleGood, "name", "role", prevState);
        const expected = {"name": "", "desc" : "has other error"};

        assert.deepStrictEqual(result, expected, "empty object event with prev state");
    });
});

//roleAllWrong
//convertToValidationState

describe("role validation state", ()=> {
    it("many bad in Role", () => {
        const result = convertToValidationState(roleAllWrong, "role");
        assert.deepStrictEqual(result, {"name": "required"}, "complex");
    });

    it("undefined object in Role", () => {
        const result = convertToValidationState(undefined, "role");
        assert.deepStrictEqual(result, {"summary": "should be object"}, "complex");
    });
});
