"use strict";

module.exports = class ConnexionValidator {
  constructor(options) {
    this.err = new Error() || options.err;
    this.statusCode = 422 || options.statusCode;
    this.messages = {};
  }

  setErrorMessage(input, message) {
    this._setMessages(input, message);
  }

  _setMessages(input, message) {
    if (!this.messages[input]) {
      this.messages[input] = [];
    }

    this.messages[input].push(message);
  }

  hasErrors() {
    let obj = this.messages;

    return Object.keys(obj).length > 0 && obj.constructor === Object;
  }

  getMessages() {
    return this.messages;
  }

  buildErrorMessage() {
    return {
      statusCode: this.statusCode,
      details: {
        messages: this.getMessages()
      }
    };
  }
};
