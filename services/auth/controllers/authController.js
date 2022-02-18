const AuthControllerClass = function() {

    const DB = require(`${global.appRoot}/services/auth/models/authModel.js`)

    this.fetchAll = (req, res, next) => {
        const data = DB.fetchAllUsers()
        console.log(data)
        res.send('respond with a resource 1');
    }
}

AuthControllerClass.prototype = require(`${global.appRoot}/lib/baseService/controllers/baseController.js`)

module.exports = new AuthControllerClass()