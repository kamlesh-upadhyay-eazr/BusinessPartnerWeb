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

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import PinModal from "../MyBookings/PinModal";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// actions
import { loginotp } from "../../store/redux/auth/actionAuth";

// import images
import logodark from "../../assets/images/logo-dark.png";
import logosmlight from "../../assets/images/logo-sm-light.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { phone: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, phone) {
    this.setState({ phone: phone });
    this.props.loginotp(phone, this.props.history);
  }

  componentDidMount() {
    document.body.classList.add("auth-body-bg");
  }

  componentWillUnmount() {
    document.body.classList.remove("auth-body-bg");
  }

  render() {
    return (
      <React.Fragment>
        <div className="home-btn d-none d-sm-block" style={{ height: "100vh" }}>
          <p className="font-size-16">
            Don't have an account ?
            <Link to="/register" className="font-weight-medium text-primary">
              Register
            </Link>
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
                          <div className="">
                            <div>
                              <Link to="#" className="logo">
                                <img src={logosmlight} height="60" alt="logo" />
                              </Link>
                            </div>

                            <h4 className="font-size-20 mt-5">
                              Welcome Back !
                            </h4>
                            <p className="text-muted font-size-16">
                              Sign in to continue to Eazr.
                            </p>
                          </div>

                          {this.props.errors && (
                            <p style={{ color: "#7062e0" }}>
                              {this.props.errors.server}
                            </p>
                          )}

                          {this.props.successful && (
                            <PinModal
                              phone={this.state.phone}
                              history={this.props.history}
                            />
                          )}

                          <div className=" mt-5">
                            <AvForm
                              className="form-horizontal"
                              onValidSubmit={this.handleSubmit}
                            >
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
                                  //validate={{ email: true, required: true }}
                                  placeholder="Enter phone"
                                  regexCriteria={/^[0-9]*$/}
                                />
                              </FormGroup>
                              {this.props.errors && (
                                <p style={{ color: "red" }}>
                                  {this.props.errors.phone}
                                </p>
                              )}

                              {/* <FormGroup className="auth-form-group-custom mb-4">
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
                              </FormGroup> */}
                              {/* <div className="mt-3 text-right">
                                <Link
                                  to="/forgot-password"
                                  className="text-muted font-size-16"
                                >
                                  <i className="mdi mdi-lock mr-1 "></i> Forgot
                                  password?
                                </Link>
                              </div> */}

                              <div className="mt-5 text-center">
                                <Button
                                  color="#7062e0"
                                  style={{ backgroundColor: "#7062e0" }}
                                  className="w-md waves-effect waves-light btn-block font-size-18 text-white"
                                  type="submit"
                                >
                                  Log In
                                </Button>
                              </div>
                            </AvForm>
                          </div>

                          <div className="mt-5 text-center">
                            {/* <p>
                              Don't have an account ?
                              <Link
                                to="/register"
                                className="font-weight-medium text-primary"
                              >
                                
                                Register
                              </Link>
                            </p> */}
                            <p className="font-size-12">
                              {/* By proceeding,you agree to our Terms & Conditions
                              & Privacy Policy Standard operator charges may
                              apply for sms */}
                              Terms & Conditions Apply
                            </p>
                            <p
                              className="font-size-16"
                              // style={{ position: "absolute", bottom: "0", right: "4%" }}
                            >
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
  const { loginError, errors, successful } = state.Auth;
  return { loginError, errors, successful };
};

export default withRouter(
  connect(mapStatetoProps, { loginotp })(withRouter(Login))
);
