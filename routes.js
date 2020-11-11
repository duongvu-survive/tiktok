'use strict';
module.exports = function(app) {
    let userController = require('./controllers/Usercontroller');
    app.route('/api/user')
        .get(userController.get)
        .post(userController.post)
};