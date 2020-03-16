const Ajv = require('ajv');
const { roleSchema, featureSchema } = require("./schemas/permissionSchemas");

const schemaValidator = new Ajv();
schemaValidator.addSchema(roleSchema, "role");
schemaValidator.addSchema(featureSchema, "feature");

const validateField = (target, targetFieldName, schemaName, previousState) => {
    let result = {[targetFieldName] : ""};
    const passes = schemaValidator.validate(schemaName, target);
    if(!passes) {
        const errors = schemaValidator.errors;
        errors.forEach((error) => {
            const errorPath = error.schemaPath.split("/");
            if(errorPath.length > 3 && errorPath[2] === targetFieldName)
                result[targetFieldName] = error.message;
        });
    }

    if(previousState)
        result = {...previousState, ...result};

    return result;
};


module.exports = {validateField};