const Validator = require("validator");
const { isEmpty } = require("./isEmpty");

export const NewAccountValidation = (data) => {
  let errors = {};
  data.bankName = !isEmpty(data.bankName) ? data.bankName : "";
  data.accNumber = !isEmpty(data.accNumber) ? data.accNumber : "";
  data.confirmAccNumber = !isEmpty(data.confirmAccNumber)
    ? data.confirmAccNumber
    : "";
  data.ifscCode = !isEmpty(data.ifscCode) ? data.ifscCode : "";
  data.branch = !isEmpty(data.branch) ? data.branch : "";

  if (Validator.isEmpty(data.bankName)) {
    errors.bankName = "Field should not be empty";
  }
  if (Validator.isEmpty(data.accNumber)) {
    errors.accNumber = "Field should not be empty";
  }
  if (Validator.isEmpty(data.ifscCode)) {
    errors.ifscCode = "Field should not be empty";
  }
  if (Validator.isEmpty(data.confirmAccNumber)) {
    errors.confirmAccNumber = "Field should not be empty";
  }
  if (data.accNumber !== data.confirmAccNumber) {
    errors.matchAccountNo = "Account Number should match ";
  }
  if (Validator.isEmpty(data.branch)) {
    errors.branch = "Field should not be empty";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
