import {
  GET_PROFILE,
  USER_PROFILE,
  PROFILE_ERRORS,
  PROFILE_LOADING,
  SHOW_MODAL,
  HIDE_MODAL,
  DOWNLOAD_QR,
  DOWNLOAD_QR_FAILED,
  SHOW_EDIT_UPI_MODAL,
  HIDE_EDIT_UPI_MODAL,
} from "../type";
import axios from "axios";
import { ip } from "../../../config/config";
import FileSaver from "file-saver";

export const getProfile = () => {
  return (dispatch) => {
    dispatch(setProfileLoading());

    axios
      // .get(`${ip}/business/merchantprofile/`)
      .get(`${ip}/business/user/me`)
      .then((res) => {
        // localStorage.setItem("authUser", JSON.stringify(res.data));
        dispatch({
          type: GET_PROFILE,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err profile", err);
        dispatch({
          type: PROFILE_ERRORS,
          // payload: err.response.data,
          payload:
            getProfile != undefined && getProfile.length != 0
              ? err.response.data
              : null,
        });
      });
  };
};

export const userProfile = () => {
  return (dispatch) => {
    dispatch(setProfileLoading());

    axios
      .post(`${ip}/business/user/me/`)
      .then((res) => {
        // localStorage.setItem("authUser", JSON.stringify(res.data));
        dispatch({
          type: GET_PROFILE,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: PROFILE_ERRORS,
          payload: err.response.data,
        });
      });
  };
};

export const updateProfile = (profile) => {
  return (dispatch) => {
    dispatch(setProfileLoading());

    axios
      .post(`${ip}/business/user/updateprofile/`, profile)
      .then((res) => {
        dispatch({
          type: GET_PROFILE,
          payload: res.data,
        });
        //ToastAndroid.show("Profile updated!", ToastAndroid.LONG);
      })
      .catch((err) => {
        dispatch({
          type: PROFILE_ERRORS,
          payload: err.response.data,
        });
      });
  };
};

export const downloadQr = (user, id, deviceWidth, deviceHeight) => {
  // console.log("proffileid", user);

  return (dispatch) => {
    dispatch(setProfileLoading());

    axios
      .get(`${ip}/business/profile/downloadqr`, {
        params: {
          deviceWidth,
          deviceHeight,
        },
      })

      .then((res) => {
        console.log("res", res);

        dispatch({
          type: DOWNLOAD_QR,
          // }).then((blob) => {
          // let url = window.URL.createObjectURL(blob);
          // let link = document.createElement('a');
          // link.href = url;
          // link.download = name;
          // link.click();
        });
        FileSaver.saveAs(`${ip}/qr/${user}/EazrQr.jpg`, "EazrQr.jpg");

        //  FileSaver.saveAs(
        //    `http://localhost:4000/qr/${user}/EazrQr.jpg`,
        //    "EazrQr.jpg"
        //  );
        // const url = window.URL.createObjectURL(new Blog([res.data]));
        // const link = document.createElement("a");
        // link.href = url;
        // link.setAttribute("download", "file.png");
        // document.body.appendChild(link);
        // link.click();
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: DOWNLOAD_QR_FAILED,
        });
      });
  };
};

export const addUpi = (profileId, upi) => {
  console.log("profile", profileId);
  console.log("upi", upi);
  return (dispatch) => {
    dispatch(setProfileLoading());

    axios
      .post(`${ip}/business/profile/addupi`, { profileId, upi })
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: GET_PROFILE,
          payload: res.data,
        });
        // dispatch(hideAddUpiModal());
        //    ToastAndroid.show("upi added successfully", ToastAndroid.SHORT);
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: PROFILE_ERRORS,
          payload: err,
        });
        //  ToastAndroid.show("Something went wrong", ToastAndroid.SHORT);
      });
  };
};

export const deleteUpi = (profileId, upi) => {
  return (dispatch) => {
    dispatch(setProfileLoading());

    axios
      .delete(`${ip}/business/profile/deleteupi`, {
        data: {
          profileId,
          upi,
        },
      })
      .then((res) => {
        console.log("res", res);
        //  dispatch(hideEditUpiModal());
        dispatch({
          type: GET_PROFILE,
          payload: res.data,
        });
        //   ToastAndroid.show("Upi deleted", ToastAndroid.SHORT);
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(hideEditUpiModal());
        dispatch({
          type: PROFILE_ERRORS,
          payload: err.response.data,
        });
        //   ToastAndroid.show("Something went wrong!", ToastAndroid.SHORT);
      });
  };
};

export const showEditUpiModal = () => {
  return {
    type: SHOW_EDIT_UPI_MODAL,
  };
};

export const hideEditUpiModal = () => {
  return {
    type: HIDE_EDIT_UPI_MODAL,
  };
};

export const showAddUpiModal = () => {
  return {
    type: SHOW_MODAL,
  };
};

export const hideAddUpiModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};
