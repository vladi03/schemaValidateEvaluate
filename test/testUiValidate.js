const assert = require("assert");
const {validateField, convertToValidationState} = require("../uiValidate");
// noinspection JSUnusedLocalSymbols
const {roleGood, roleBadFeature, roleMissingName, roleMinLength,
    roleAllWrong } = require("../mocks/mockPermissions");
const {dupFeatureIds} = require("../mocks/mockUsers");

describe("ui validation without prev state", ()=> {
    it("bad Roles Name, target name", ()=> {
        const result = validateField(roleMinLength, "name", "role");
        const expected = {
            "name": {
                "keyWord": "minLength",
                "message": "should NOT be shorter than 3 characters"
            }
        };
        assert.deepStrictEqual(result, expected, "fail message for name");
    });

    it("bad Roles Name, target different", ()=> {
        const result = validateField(roleMinLength, "desc", "role");
        assert.deepStrictEqual(result, {}, "no results");
    });

    it("bad Roles Name, target different", ()=> {
        const result = validateField(roleBadFeature, "features", "role");
        const expected = {
            "features": {
                "keyWord": "required",
                "message": "should have required property 'id'"
            }
        };
        assert.deepStrictEqual(result, expected, "no results");
    });

    it("many bad in Role", () => {
        const result = validateField(roleAllWrong, "name", "role");
        const expected = {
            "name": {
                "keyWord": "required",
                "message": "should have required property 'name'"
            }
        };
        assert.deepStrictEqual(result, expected, "complex");
    });

    it("user with dup roles ids", () => {
        const result = validateField(dupFeatureIds, "roleIds", "user");
        const expected = {
            "roleIds": {
                "keyWord": "uniqueItems",
                "message": "should NOT have duplicate items (items ## 1 and 0 are identical)"
            }
        };

        assert.deepStrictEqual(result, expected, "complex");
    });
});

describe("ui validation with prev state", ()=> {
    it("bad Roles Name, target name", ()=> {
        const prevState = {"name": "has some error", "desc" : "has other error"};
        const result = validateField(roleMinLength, "name", "role", prevState);
        const expected = {
            "name": {
                "keyWord": "minLength",
                "message": "should NOT be shorter than 3 characters"
            },
            "desc" : "has other error"
        };

        assert.deepStrictEqual(result, expected, "should clear other errors that are no longer valid");
    });

    it("bad Roles Name, target different", ()=> {
        const prevState = {"name": "has some error", "desc" : "has other error"};
        const result = validateField(roleMinLength, "desc", "role", prevState);
        const expected = {"name" : "has some error"};

        assert.deepStrictEqual(result, expected, "should keep prev error result");
    });
});

describe("role Good", ()=> {
    it("bad Roles Name, target name", ()=> {
        const result = validateField(roleGood, "name", "role");
        assert.deepStrictEqual(result, {}, "empty object");
    });

    it("all good Roles, target name", ()=> {
        const prevState = {"name": "has some error", "desc" : "has other error"};
        const result = validateField(roleGood, "name", "role", prevState);
        const expected = {"desc" : "has other error"};

        assert.deepStrictEqual(result, expected, "empty object event with prev state");
    });
});

describe("role/user validation state", ()=> {
    it("many bad in Role", () => {
        const result = convertToValidationState(roleAllWrong, "role");
        const expected = {
            "name": {
                "keyWord": "required",
                "message": "should have required property 'name'"
            },
            "summary": {
                "keyWord": "required",
                "message": "name should have required property 'name'"
            }
        };
        assert.deepStrictEqual(result, expected, "complex");
    });


    it("undefined object in Role", () => {
        const result = convertToValidationState(undefined, "role");
        const expected = {
            "summary": {
                "keyWord": "type",
                "message": "should be object"
            }
        };

        assert.deepStrictEqual(result, expected, "complex");
    });
});
