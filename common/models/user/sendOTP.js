'use strict';

module.exports = function(User) {
  User.sendOTP = function(username, mobileNumber, emailId, cb) {
    cb(null, {message: 'loggedin successfully'});
  };
  User.remoteMethod('sendOTP', {
    description: 'Send an OTP',
    accepts: [
        {arg: 'username', type: 'string'},
        {arg: 'mobileNumber', type: 'string'},
        {arg: 'emailId', type: 'string'},
    ],
    returns: {arg: 'message', type: 'string'},
  });
}
;
