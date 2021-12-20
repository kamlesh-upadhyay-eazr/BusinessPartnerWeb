const Validator = require("validator");
const { isEmpty } = require("./isEmpty");

const TicketValidation = (data) => {
  let errors = {};
  data.title = !isEmpty(data.title) ? data.title : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title Should not be empty";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name Should not be empty";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Should not be empty";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone Should not be empty";
  }
  if (Validator.isEmpty(data.type)) {
    errors.type = "Please Select Ticket Type";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Add Description";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default TicketValidation;
