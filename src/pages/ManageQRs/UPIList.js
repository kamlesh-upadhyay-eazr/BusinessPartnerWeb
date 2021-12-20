import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUpi } from "../../store/redux/profile/actionProfile";
import { useDispatch } from "react-redux";

const UPIList = (props) => {
  const dispatch = useDispatch();
  // console.log("proorppr", props.h.profile);
  const [isDeleted, setIsDeleted] = useState(false);
  const handleClick = () => {
    // setIsDeleted(!isDeleted);
    dispatch(deleteUpi(props.h.profile._id, props.upiId));
    // this.props.deleteUpi(props.h.profile._id, props.upiId);
  };
  return (
    <div
      className="upi-list my-2"
      style={{ display: !isDeleted ? "flex" : "none" }}
    >
      <div className="upi-name">
        <h6>{props.upiId}</h6>
      </div>
      <div
        className="delete-upi d-flex align-items-center"
        onClick={handleClick}
      >
        <p>Delete</p>
        <i className="fas fa-times ml-2"></i>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  // console.log("state", state.Profile);
  const {} = state.Profile;
  // console.log("order", orderTransactions);
  return {};
};

export default withRouter(connect(mapStatetoProps, { deleteUpi })(UPIList));

// export default UPIList;
