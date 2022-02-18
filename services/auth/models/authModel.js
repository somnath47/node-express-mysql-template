const AuthModelClass = function () {

    this.fetchAllUsers = async () => {

		try{
			const [rows, fields] = await this.DB.conn.execute(
				'SELECT * FROM `users` WHERE `name` = ? AND `age` > ?', 
				['Morty', 14]
			);

			return true
		} catch (e) {
			console.log(e)
		}
        

        
    }
    
}

AuthModelClass.prototype = require(`${global.appRoot}/lib/baseService/models/baseModel.js`)

module.exports = new AuthModelClass()