'use strict';

module.exports = function(User) {
  User.vendorSignup = function(username, password, userEntityType, cb) {
    cb(null, {message: 'loggedin successfully'});
  };
  User.remoteMethod('vendorSignup', {
    description: 'Send an OTP',
    accepts: [
        {arg: 'username', type: 'string'},
        {arg: 'password', type: 'string'},
        {arg: 'userEntityType', type: 'string'},
    ],
    returns: {arg: 'message', type: 'string'},
  });
}
;
