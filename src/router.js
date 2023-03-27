const express = require('express');
const validateBodyRequire = require('./middlewares/validateBodyRequire');
const schemaUser = require('./validation/schemaUser');

const {
    registerUsers,
    getDate
} = require('./controllers/users');

const routes = express();

routes.post('/', registerUsers);
routes.get('/name', getDate);
//validateBodyRequire(schemaUser)
module.exports = routes;