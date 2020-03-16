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
            else if(error["params"]["missingProperty"] === targetFieldName)
                result[error["params"]["missingProperty"]] = error.keyword;
        });
    }

    if(previousState)
        result = {...previousState, ...result};

    return result;
};

const convertToValidationState = (target, schemaName) => {
    const passes = schemaValidator.validate(schemaName, target);
    const errors = schemaValidator.errors;
    const result = {};
    if(!passes && errors)
        errors.forEach((error) => {
            const errorPath = error.schemaPath.split("/");
            if(errorPath.length > 3 )
                result[errorPath[2]] = error.message;
            else if(error["params"]["missingProperty"])
                result[error["params"]["missingProperty"]] = error.keyword;
            else
                result["summary"] = error.message;
        });
    return result
};

module.exports = {validateField, convertToValidationState};