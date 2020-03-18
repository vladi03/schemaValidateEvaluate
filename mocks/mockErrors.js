

const threeErrors = [
    {"keyword":"minLength","dataPath":".clientId","schemaPath":"#/properties/clientId/minLength","params":{"limit":3},"message":"should NOT be shorter than 3 characters"},
    {"keyword":"type","dataPath":".accessTokenLifetime","schemaPath":"#/properties/accessTokenLifetime/type","params":{"type":"integer"},"message":"should be integer"},
    {"keyword":"minimum","dataPath":".accessTokenLifetime","schemaPath":"#/properties/accessTokenLifetime/minimum","params":{"comparison":">=","limit":60,"exclusive":false},"message":"should be >= 60"}
];


module.exports = {threeErrors};