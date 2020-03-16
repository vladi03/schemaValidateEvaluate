
const allGood = {
    "_id": "5e39e1120f469304de1c5270",
    "source": "AzureAD",
    "roleIds": ["5e557feb7752742633621a42"],
    "ad": {
        "businessPhones": ["678-441-1263"],
        "displayName": "Martinez, Vladimir (US)",
        "givenName": "Vladimir",
        "jobTitle": "Systems Developer Analyst III",
        "mail": "vladimir.martinez@bcdtravel.com",
        "mobilePhone": null,
        "officeLocation": "GA999",
        "preferredLanguage": null,
        "surname": "Martinez",
        "userPrincipalName": "Vladimir.Martinez@bcdtravel.com",
        "id": "a7d230ec-502b-4257-b316-2c35250ba085"
    },
    "hasLoggedIn": false,
    "createdBy": "a7d230ec-502b-4257-b316-2c35250ba085",
    "createdOn": "2020-02-04T21:24:34.382Z",
    "modifiedBy": "a7d230ec-502b-4257-b316-2c35250ba085",
    "modifiedOn": "2020-02-04T21:24:34.382Z"
};

const newUser = {
    "source": "AzureAD",
    "roleIds": ["5e557feb7752742633621a42"],
    "ad": {
        "businessPhones": ["678-441-1263"],
        "displayName": "Martinez, Vladimir (US)",
        "givenName": "Vladimir",
        "jobTitle": "Systems Developer Analyst III",
        "mail": "vladimir.martinez@bcdtravel.com",
        "mobilePhone": null,
        "officeLocation": "GA999",
        "preferredLanguage": null,
        "surname": "Martinez",
        "userPrincipalName": "Vladimir.Martinez@bcdtravel.com",
        "id": "a7d230ec-502b-4257-b316-2c35250ba085"
    },
    "hasLoggedIn": false,
    "createdBy": "a7d230ec-502b-4257-b316-2c35250ba085",
    "createdOn": "2020-02-04T21:24:34.382Z",
    "modifiedBy": "a7d230ec-502b-4257-b316-2c35250ba085",
    "modifiedOn": "2020-02-04T21:24:34.382Z"
};

const noAd = {
    "_id": "5e39e1120f469304de1c5270",
    "source": "AzureAD",
    "roleIds": ["5e557feb7752742633621a42"],
    "ad": undefined,
    "hasLoggedIn": false,
    "createdBy": "a7d230ec-502b-4257-b316-2c35250ba085",
    "createdOn": "2020-02-04T21:24:34.382Z",
    "modifiedBy": "a7d230ec-502b-4257-b316-2c35250ba085",
    "modifiedOn": "2020-02-04T21:24:34.382Z"
};

const dupFeatureIds = {
    "_id": "5e39e1120f469304de1c5270",
    "source": "AzureAD",
    "roleIds": ["5e557feb7752742633621a42", "5e557feb7752742633621a42"],
    "ad": {
        "businessPhones": ["678-441-1263"],
        "displayName": "Martinez, Vladimir (US)",
        "givenName": "Vladimir",
        "jobTitle": "Systems Developer Analyst III",
        "mail": "vladimir.martinez@bcdtravel.com",
        "mobilePhone": null,
        "officeLocation": "GA999",
        "preferredLanguage": null,
        "surname": "Martinez",
        "userPrincipalName": "Vladimir.Martinez@bcdtravel.com",
        "id": "a7d230ec-502b-4257-b316-2c35250ba085"
    },
    "hasLoggedIn": false,
    "createdBy": "a7d230ec-502b-4257-b316-2c35250ba085",
    "createdOn": "2020-02-04T21:24:34.382Z",
    "modifiedBy": "a7d230ec-502b-4257-b316-2c35250ba085",
    "modifiedOn": "2020-02-04T21:24:34.382Z"
};

module.exports = { allGood, noAd, dupFeatureIds, newUser  };