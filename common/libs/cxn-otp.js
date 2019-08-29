'use strict';

let otplib = require("otplib");

module.exports = class ConnexionUser {
  constructor() {
    this.secret = otplib.authenticator.generateSecret();
    this.token = otplib.authenticator.generate(this.secret);
    this.isValid = otplib.authenticator.check(this.token, this.secret);
  }

  generate() {
    if (this.isValid) {
      return this.token;
    } else {
      throw new Error("Cannot generate TOTP: Token or Secret are invalid");
    }
  }
};
