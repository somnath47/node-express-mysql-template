var express = require('express');
var router = express.Router();
const authController = require(`${global.appRoot}/services/auth/controllers/authController.js`)

/* GET users listing. */
router.get('/', authController.fetchAll);

module.exports = router;
