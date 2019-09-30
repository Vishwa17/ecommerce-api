'use strict';

module.exports = function(User) {
  User.vendorLogin = function(username, password, userEntityType,
    loginMode, cb) {
    cb(null, {message: 'loggedin successfully'});
  };
  User.remoteMethod('vendorLogin', {
    description: 'Send an OTP',
    accepts: [
        {arg: 'username', type: 'string'},
        {arg: 'password', type: 'string'},
        {arg: 'userEntityType', type: 'string'},
        {arg: 'loginMode', type: 'string'},
    ],
    returns: {arg: 'message', type: 'string'},
  });
}
;
