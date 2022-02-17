const BaseModelClass = function () {

    this.DB = require(`${global.appRoot}/lib/baseService/connections/mysql`)
    
}

module.exports = new BaseModelClass()