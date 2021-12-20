import React, { useState } from "react";
import bankImg from "../../assets/images/hdfc-light.png";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changedefaultbank } from "../../store/redux/settlements/actionsettlements";
import { useDispatch } from "react-redux";
const AccountDetails = (props) => {
  // console.log("ffffffff", props.bankarray);
  const [background, setBackground] = useState(0);
  const dispatch = useDispatch();
  // const index = props.bankarray
  //   .map((item) => item)
  //   .findIndex((i) => i.ifscCode);

  // const submitHandle = () => {
  //   console.log("helllo", index);
  //   dispatch(changedefaultbank(index));
  // };
  return (
    <>
      {/* {console.log("log", index)} */}
      {props.bankarray
        ? props.bankarray.map((item, index) => {
            // console.log("item", item);
            return (
              <div
                className="separate-account d-flex"
                style={{ background: background === 0 && "#000" }}
                onClick={() => setBackground(0)}
              >
                <div className="acc-details d-flex ">
                  <div
                    className="bank-logo mr-3"
                    style={{ background: "#ffffff" }}
                  >
                    <img src={bankImg} alt="" />
                  </div>
                  <div>
                    <p>HDFC Bank {item.accountNumber}</p>
                    <span>IFSC : {item.ifscCode}</span>
                  </div>
                </div>
                <div className="selected-icon">
                  <i
                    // onClick={() => console.log("index number", index)}
                    // {submitHandle}
                    onClick={() => dispatch(changedefaultbank(index))}
                    class="fas fa-check-circle"
                  ></i>
                </div>
                {/* {console.log("hhh", index)} */}
              </div>
            );
          })
        : "null"}
    </>
  );
};

const mapStatetoProps = (state) => {
  const { bankDetails } = state.Settlement;
  return { bankDetails };
};

export default withRouter(
  connect(mapStatetoProps, { changedefaultbank })(AccountDetails)
);

// export default AccountDetails;
