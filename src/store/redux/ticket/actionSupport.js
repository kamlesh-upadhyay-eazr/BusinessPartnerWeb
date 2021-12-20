import {
  ADD_TICKET,
  ADD_TICKET_FAILED,
  SUPPORT_LOADING,
  GET_TICKETS,
  GET_TICKETS_FAILED,
  GET_TICKET,
  GET_TICKET_FAILED,
  ADD_TICKET_CONVERSATION,
  ADD_TICKET_CONVERSATION_FAILED,
} from "../type";

import { ip } from "../../../config/config";
import axios from "axios";

export const addTicket = (data) => {
  console.log("data in action", data);
  // console.log("files", data.file.name);
  // const file = data.file.name;
  // const name = data.name;
  // const title = data.title;
  // const description = data.description;
  // const type = data.ticketType;
  // const profile = data.business;
  return (dispatch) => {
    dispatch(setSupportLoading());
    axios
      .post(`${ip}/business/tickets/addticket`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: ADD_TICKET,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: ADD_TICKET_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const addConversation = (data) => {
  return (dispatch) => {
    dispatch(setSupportLoading());

    axios
      .post(`${ip}/business/tickets/addconversation`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch({
          type: ADD_TICKET_CONVERSATION,
          payload: res.data,
        });

        // ToastAndroid.show("Comment Added Sussfully!", ToastAndroid.LONG);
      })
      .catch((err) => {
        dispatch({
          type: ADD_TICKET_CONVERSATION_FAILED,
          payload: err,
        });
        //ToastAndroid.show("Something went wrong", ToastAndroid.LONG);
      });
  };
};

export const getTickets = (id) => {
  return (dispatch) => {
    dispatch(setSupportLoading());

    axios
      .get(`${ip}/business/tickets/`)
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: GET_TICKETS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({
          type: GET_TICKETS_FAILED,
          payload: err,
        });
      });
  };
};

export const getTicketById = (id) => {
  return (dispatch) => {
    dispatch(setSupportLoading());

    axios
      .get(`${ip}/business/tickets/getTicket`, {
        params: { ticketId: id },
      })
      .then((res) => {
        dispatch({
          type: GET_TICKET,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_TICKET_FAILED,
          payload: err,
        });
      });
  };
};

const setSupportLoading = () => {
  return {
    type: SUPPORT_LOADING,
  };
};
