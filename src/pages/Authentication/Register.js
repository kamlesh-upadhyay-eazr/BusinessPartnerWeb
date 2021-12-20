import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Alert,
  Container,
  Label,
  FormGroup,
} from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// action
import { registerUser } from "../../store/redux/auth/actionAuth";

// Redux
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import images
import logodark from "../../assets/images/logo-dark.png";
import logosmlight from "../../assets/images/logo-sm-light.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phone: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, values) {
    this.props.registerUser(values);
  }

  componentDidMount() {
    // this.props.registerUserFailed("");
    // this.props.apiError("");
    document.body.classList.add("auth-body-bg");
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="home-btn d-none d-sm-block font-size-16"
          style={{ height: "100vh" }}
        >
          <p>
            Already have an account ?{" "}
            <Link to="/login" className="font-weight-medium text-primary">
              {" "}
              Login
            </Link>{" "}
          </p>
        </div>
        <div>
          <Container fluid className="p-0">
            <Row className="no-gutters">
              <Col lg={6}>
                <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                  <div className="w-100">
                    <Row className="justify-content-center">
                      <Col lg={9}>
                        <div>
                          <div>
                            <div style={{ paddingTop: "6rem" }}>
                              <Link to="#" className="logo">
                                <img src={logosmlight} height="60" alt="logo" />
                              </Link>
                            </div>

                            <h4 className="font-size-20 mt-5">
                              Register account
                            </h4>
                            <p className="text-muted font-size-16">
                              Register to continue to Eazr.
                            </p>
                          </div>

                          {this.props.successful && (
                            <Alert color="success">
                              Registration Done Successfully. Please Login.
                            </Alert>
                          )}

                          <div className=" mt-5">
                            <AvForm
                              onValidSubmit={this.handleSubmit}
                              className="form-horizontal"
                            >
                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-mail-line auti-custom-input-icon"></i>
                                <Label
                                  htmlFor="useremail"
                                  className="font-size-18"
                                >
                                  Email
                                </Label>
                                <AvField
                                  name="email"
                                  value={this.state.email}
                                  validate={{ email: true, required: true }}
                                  type="email"
                                  className="form-control font-size-16"
                                  id="useremail"
                                  placeholder="Enter email"
                                  autoComplete="off"
                                />
                              </FormGroup>

                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-user-2-line auti-custom-input-icon"></i>
                                <Label htmlFor="phone" className="font-size-18">
                                  phone
                                </Label>
                                <AvField
                                  name="phone"
                                  value={this.state.phone}
                                  type="text"
                                  className="form-control font-size-16"
                                  id="phone"
                                  placeholder="Enter phone"
                                  autoComplete="off"
                                />
                              </FormGroup>
                              {this.props.errors && (
                                <p style={{ color: "primary" }}>
                                  {this.props.errors.phone}
                                  {this.props.errors.msg}
                                </p>
                              )}

                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-lock-2-line auti-custom-input-icon"></i>
                                <Label
                                  htmlFor="userpassword"
                                  className="font-size-18"
                                >
                                  Password
                                </Label>
                                <AvField
                                  name="password"
                                  value={this.state.password}
                                  type="password"
                                  className="form-control font-size-16"
                                  id="userpassword"
                                  placeholder="Enter password"
                                />
                              </FormGroup>
                              {this.props.errors && (
                                <p style={{ color: "red" }}>
                                  {this.props.errors.password}
                                </p>
                              )}
                              <div className="mt-5 text-center">
                                <Button
                                  color="#7062e0"
                                  style={{ backgroundColor: "#7062e0" }}
                                  className="w-md waves-effect waves-light btn-block font-size-18 text-white"
                                  type="submit"
                                >
                                  Register
                                </Button>
                              </div>
                            </AvForm>
                          </div>

                          <div className="mt-5 text-center">
                            <p className=" font-size-12">
                              Terms & Conditions Apply
                            </p>
                            <p className="font-size-16">
                              @{new Date().getFullYear()} All Right Reserved
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="authentication-bg">
                  {/* <div className="bg-overlay"></div> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { user, loading, successful, errors } = state.Auth;
  return { user, loading, successful, errors };
};

export default connect(mapStatetoProps, {
  registerUser,
})(Register);
