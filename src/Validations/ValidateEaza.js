const Validator = require("validator");
const { isEmpty } = require("./isEmpty");

const ValidateEaza = (data) => {
  let error = {};

  data.message = !isEmpty(data.message) ? data.message : "";

  if (Validator.isEmpty(data.message)) {
    error.message = "Type something";
  }
  return {
    error,
    isValid: isEmpty(error),
  };
};

export default ValidateEaza;
