"use strict";

module.exports = class ConnexionUser {
  constructor(User) {
    this.User = User;
  }

  convertDisplayUnits(request) {
    if (!request.display_units) return;
    let self = this;

    this.User.findById(request.id, function(err, user) {
      if (err) throw err;

      if (user) {
        // Measurement conversion
        if (request.display_units === "standard") {
          if (request.height) {
            user.height.cm = self.convertInchesToCm(request.height.feet, request.height.inches)
            user.save();
          }

          if (request.weight) {
            user.weight.kgs = self.convertLbsToKg(request.weight.lbs)
            user.save();
          }
        } else if (request.display_units === "metric") {
          if (request.height) {
            let feetInches = self.convertCmToInches(request.height.cm, false);

            user.height.feet = feetInches.feet;
            user.height.inches = feetInches.inches;
            user.save();
          }

          if (request.weight) {
            user.weight.lbs = self.convertKgToLbs(request.weight.kgs);
            user.save();
          }
        }
      }
    });
  }

  convertCmToInches(cm, stringResult = true) {
    let totalInches = Math.round(cm * 0.393701);
    let feet = Math.floor(totalInches / 12);
    let inches = totalInches % 12;

    if (stringResult) {
      return feet + "' " + inches + "''";
    } else {
      return {
        feet: feet,
        inches: inches
      };
    }
  }

  convertInchesToCm(feet, inches) {
    return (feet * 12 + inches) * 2.54;
  }

  convertKgToLbs(kgs) {
    return 2.20462 * kgs;
  }

  convertLbsToKg(lbs) {
    return 0.453592 * lbs
  }
};
