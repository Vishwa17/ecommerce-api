'use strict';

module.exports = function(User) {
  require('./user/customerLogin')(User);
  require('./user/customerSignup')(User);
  require('./user/sendOTP')(User);
  require('./user/vendorLogin')(User);
  require('./user/vendorSignup')(User);
  require('./user/verifyOTP')(User);
};
