'use strict';

module.exports = function(User) {
  /*
  userEntityType = vendor/customer
  loginMode = otp/password
  */
  User.customerLogin = function() {
    let [username, password, userEntityType, loginMode, cb] =
        Array.from(arguments).map(ob => ob);

    if (loginMode == 'otp') {
      cb(null, {message: 'loggedin successfully via otp'});
    }   else if (loginMode == 'password') {
      cb(null, {message: 'loggedin successfully via password'});
    }   else {
      let error = new Error('loginMode is wrong');
      error.status = 422;
      cb(error);
    }
  };
  User.remoteMethod('customerLogin', {
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
