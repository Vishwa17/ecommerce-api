'use strict';
const OtpGenerator = require('../libs/cxn-otp');
const ConnexionValidator = require('../libs/cxn-validator');

module.exports = function(Otp) {
  Otp.send = function(isd, number, cb) {
    Otp.sendOtp(isd, number, cb);
  };
  Otp.sendOtp = function(isd, number, cb) {
    var accountSid = 'AC2be67b84ae268bde05ebe5ece68897b4'; // Your Account SID from www.twilio.com/console
    var authToken = 'b66604e95ce2d8539d932aede565793c';   // Your Auth Token from www.twilio.com/console

    var twilio = require('twilio');
    var client = new twilio(accountSid, authToken);

    client.messages.create({
      body: 'Hello from Node',
      to: '+' + isd + number,  // Text this number
      from: '+17344413096', // From a valid Twilio number
    })
    .then((message) => {
      console.log('sms send response', message);
      cb(null, message);
    }, error => {
      console.log('sms send error', error);
      cb(error, null);
    });

    // let Twilio = Otp.app.models.Twilio;
    // const otpNumber = new OtpGenerator().generate();
    // console.log('Otp number', otpNumber);
    // const TWILIO_FROM_NUMBER = '+17344413096';
    // Otp.create({
    //   isd: isd,
    //   phone: number,
    //   code: otpNumber,
    //   created: new Date(),
    // }, function(err, otp) {
    //   console.log('plplplplpl', err, otp);
    //   if (err) {
    //     console.error('> error in creating otp', err);
    //   }
    //   console.log('obile number', '+' + isd + number);
    //   Twilio.send({
    //     type: 'sms',
    //     to: '+' + isd + number,
    //     from: TWILIO_FROM_NUMBER,
    //     body: otpNumber,
    //   },
    //   function(err, data) {
    //     if (err) {
    //       console.log('errrrr', err);
    //       // get rid of the otp record if the sms is not sent
    //       otp.destroy();

    //       // Send the validation error message received from twilio
    //       let twilioValidator = new ConnexionValidator();

    //       if (err.message.indexOf("The 'To' number") !== -1) {
    //         twilioValidator.setErrorMessage('number', 'INVALIDPHONENUMBER');
    //       } else {
    //         twilioValidator.setErrorMessage('number', 'INVALIDPHONENUMBER');
    //       }
    //       cb(twilioValidator.buildErrorMessage(), {});
    //     } else {
    //       cb(null, 'CALLBACK-RESPONSES.OTP-SENT');
    //     }
    //   }
    //   );
    // }
    // );
  };

  Otp.remoteMethod('send', {
    description: 'Send an OTP',
    accepts: [{arg: 'isd', type: 'string'}, {arg: 'number', type: 'string'}],
    returns: {arg: 'message', type: 'string'},
  });
};
