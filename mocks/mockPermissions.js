
const roleGood = {
    "_id" : "5e557f90775274263362197a",
    "name" : "ReadOnly",
    "desc" : "Read only access to the site",
    "features" : [
        {
            "_id" : 1,
            "id": 8,
            "name" : "ReadIdClients",
            "desc" : "Read Identity Server Clients"
        },
        {
            "_id" : 3,
            "id": 4,
            "name" : "ReadUsers",
            "desc" : "Read UI Users"
        }
    ]
};

const roleMinLength = {
    "_id" : "5e557f90775274263362197a",
    "name" : "R",
    "desc" : "Read only access to the site",
    "features" : [
    ]
};

const roleMissingName= {
    "_id" : "5e557f90775274263362197a",
    "desc" : "Read only access to the site",
    "features" : [
        {
            "_id" : 1,
            "id": 8,
            "name" : "ReadIdClients",
            "desc" : "Read Identity Server Clients"
        },
        {
            "_id" : 3,
            "id": 4,
            "name" : "ReadUsers",
            "desc" : "Read UI Users"
        }
    ]
};

const roleBadFeature = {
    "_id" : "5e557f90775274263362197a",
    "name" : "ReadOnly",
    "desc" : "Read only access to the site",
    "features" : [
        {
            "name" : "ReadIdClients",
            "desc" : "Read Identity Server Clients"
        },
        {
            "id" : 3,
            "name" : "ReadUsers",
            "desc" : "Read UI Users"
        }
    ]
};

const roleNoFeatures = {
    "_id" : "5e557f90775274263362197a",
    "name" : "ReadOnly",
    "desc" : "Read only access to the site",
    "features" : []
};

const featureGood = {
    "_id" : 6,
    "id" : 8,
    "name" : "WriteRoles",
    "desc" : "Write Site Roles"
};

const featureBadName = {
    "_id" : 6,
    "id" : 8,
    "desc" : "Write Site Roles"
};

const featureBadId= {
    "_id" : 0,
    "id" : 0,
    "name" : "WriteRoles",
    "desc" : "Write Site Roles"
};

module.exports = {roleGood, roleBadFeature, roleNoFeatures, roleMissingName,
    roleMinLength, featureGood, featureBadName, featureBadId};