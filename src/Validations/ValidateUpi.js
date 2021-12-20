const Validator = require("validator");
const { isEmpty } = require("./isEmpty");

export const upiValidation = (data) => {
  let errors = {};
  data.upiId = !isEmpty(data.upiId) ? data.upiId : "";

  if (Validator.isEmpty(data.upiId)) {
    errors.upiId = "Field should not be empty";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
