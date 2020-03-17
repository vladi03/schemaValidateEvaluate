const Ajv = require('ajv');
const { roleSchema,
    featureSchema } = require("./schemas/permissionSchemas");
const userSchema = require("./schemas/userSchema");
const schemaValidator = new Ajv();
schemaValidator.addSchema(roleSchema, "role");
schemaValidator.addSchema(featureSchema, "feature");
schemaValidator.addSchema(userSchema, "user");

const validateField = (target, targetFieldName, schemaName, previousState) => {
    const result = schemaValidator.validate(schemaName, target) ?
        {[targetFieldName] : undefined} : errorToValidation(schemaValidator.errors, false, targetFieldName);
    if(result[targetFieldName]) {
        return {...previousState, ...result};
    } else {
        // noinspection JSUnusedLocalSymbols
        const {[targetFieldName]: _, ...newResult} = {...previousState, ...result};
        return newResult;
    }

};

const convertToValidationState = (target, schemaName) => {
    return schemaValidator.validate(schemaName, target) ?
        {} : errorToValidation(schemaValidator.errors, true);
};

const errorToValidation = (errors, includeSummary, onlyfield) => {
    const result = {};
    if(errors && errors.length > 0) {
        errors.forEach((error) => {
            let fieldName = findPropertyFromPath(error.schemaPath) ||
                error["params"]["missingProperty"] || "summary";

            if(onlyfield) {
                if (onlyfield === fieldName)
                    result[onlyfield] = {keyWord: error.keyword, message: error.message};
                else
                    result[onlyfield] = undefined;
            }
            else
                result[fieldName] = {keyWord: error.keyword, message: error.message};

            if(includeSummary && fieldName !== "summary")
                result.summary = {keyWord: error.keyword, message: `${fieldName} ${error.message}` };
        });
    }
    return result
};

const findPropertyFromPath = (path) => {
    const re = /\/properties\/([a-zA-Z0-9]*)\//;
    const result = path.match(re);
    if(result && result.length > 1)
        return result[1];
    else return false;
};


module.exports = {validateField, convertToValidationState, findPropertyFromPath};