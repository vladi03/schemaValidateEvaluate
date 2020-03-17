const assert = require("assert");
const {findPropertyFromPath} = require("../uiValidate");
describe("path one", ()=>{
    it("definitions", ()=>{
        const path = "#/definitions/client/properties/clientId/minLength";
        const result = findPropertyFromPath(path);
        assert.deepStrictEqual(result, "clientId");
    });

    it("standard", ()=>{
        const path = "#/properties/features/items/required";
        const result = findPropertyFromPath(path);
        assert.deepStrictEqual(result, "features");
    });

    it("standard 2", ()=>{
        const path = "#/properties/name/minLength";
        const result = findPropertyFromPath(path);
        assert.deepStrictEqual(result, "name");
    });
});

