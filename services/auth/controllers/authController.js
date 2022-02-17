const AuthControllerClass = function() {

    this.fetchAll = function(req, res, next) {
        res.send('respond with a resource 1');
    }
}

AuthControllerClass.prototype = require(`${global.appRoot}/lib/baseService/controllers/baseController.js`)

module.exports = new AuthControllerClass()