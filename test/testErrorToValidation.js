const assert = require("assert");
const {errorToValidationState} = require("../uiValidate");
const {threeErrors} = require("../mocks/mockErrors");
describe("multiple errors with field only", () => {
    it("three errors", ()=> {
        const result = errorToValidationState(threeErrors, false, "clientId");
        const expected = {
            clientId : {
                "keyWord": "minLength",
                "message": "should NOT be shorter than 3 characters"
            }
        };

        assert.deepStrictEqual(result,expected, "should have client id in model");
    })
});