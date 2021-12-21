import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, resendOtp } from "../../store/redux/auth/actionAuth";
import "./myBooking.css";
import PinInput from "react-pin-input";
// Redux
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const ModalExample = (props) => {
  console.log("props", props);

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [otp, setotp] = useState("");

  // console.log(otp);

  const VerifyOtp = (e) => {
    // const otpNumber = otp.pin1 + otp.pin2 + otp.pin3 + otp.pin4;
    const otpNumber = otp;
    props.verifyOtp(props.phone.phone, otpNumber, props.history);
  };

  const ResendOtp = (e) => {
    return dispatch(resendOtp(props.phone));
  };
  // const count = useSelector((state) => state.counter.count);
  const showModal = useSelector((state) => state.Auth.successful);
  // console.log("coount", showModal);

  const toggle = () => setModal(!modal);
  const move = (fromtxt, totxt) => {
    var length = fromtxt.length;

    if (length === 1) {
      document.getElementById(totxt).focus();
    }
  };
  return (
    <div className="pin-modal-div">
      {showModal ? (
        <Modal isOpen centered style={{ maxWidth: "70%", padding: "5rem 0" }}>
          <div className="text-center pin-modal">
            <h4 className="mb-3">Enter Otp</h4>
            <p className="mb-5">
              otp has been sent on your register mobile no.
            </p>
            <div className="modal-pin-form mb-5">
              {/* <input
                type="text"
                id="txt1"
                maxLength="2"
                onKeyUp={move("txt1", "txt2")}
                onChange={(text) =>
                  setotp({
                    ...otp,
                    pin1: text.target.value,
                  })
                }
                />
              <input
                type="text"
                id="txt2"
                maxLength="1"
                onKeyUp={move("txt2", "txt3")}
                onChange={(text) =>
                  setotp({
                    ...otp,
                    pin2: text.target.value,
                  })
                }
              />
              <input
                type="text"
                id="txt3"
                maxLength="1"
                onKeyUp={move("txt3", "txt4")}
                onChange={(text) =>
                  setotp({
                    ...otp,
                    pin3: text.target.value,
                  })
                }
              />
              <input
                type="text"
                id="txt4"
                maxLength="1"
                onChange={(text) =>
                  setotp({
                    ...otp,
                    pin4: text.target.value,
                  })
                }
              />
             </div> */}

              <PinInput
                length={4}
                initialValue={otp}
                type="text"
                onChange={(text) => {
                  setotp(text);
                }}
                onComplete={() => {
                  VerifyOtp();
                }}
                inputMode="number"
                style={{ padding: "10px" }}
                inputStyle={{ borderColor: "#7062e0" }}
                inputFocusStyle={{ borderColor: "#7062e0" }}
                // onComplete={(text) => {

                // }}
                autoSelect={true}
                // regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              />
            </div>

            {/* <div className="my-5 text-white">
            <Timer
              initialTime={119999}
              direction="backward"
              className="my-5 text-white"
            >
              {() => (
                <React.Fragment>
                  <Timer.Minutes /> : <Timer.Seconds />
                </React.Fragment>
              )}
            </Timer>
          </div> */}
            {/* <Link to="/processing-bookings"> */}
            {/* <Link to="/dashboard"> */}
            <button
              onClick={(e) => VerifyOtp(e)}
              className="mb-5"
              color="#7062e0"
            >
              Verify
            </button>
            {/* </Link> */}
            <br />
            <Link to=""
              style={{ color: "#7062e0", borderBottom: "1px solid #7062e0 " }}
              onClick={(e) => ResendOtp(e)}
            >
              Resend Otp
            </Link>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { loginError, errors, successful } = state.Auth;
  return { loginError, errors, successful };
};

export default withRouter(
  connect(null, { verifyOtp })(withRouter(ModalExample))
);
