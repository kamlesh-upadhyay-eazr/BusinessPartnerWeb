import {
  SUPPORT_LOADING,
  ADD_TICKET,
  ADD_TICKET_FAILED,
  GET_TICKETS,
  GET_TICKETS_FAILED,
  GET_TICKET,
  GET_TICKET_FAILED,
  ADD_TICKET_CONVERSATION,
  ADD_TICKET_CONVERSATION_FAILED,
} from "../type";

const Initial_State = {
  tickets: null,
  ticket: null,
  loading: false,
  errors: {},
};

export default (state = Initial_State, action) => {
  switch (action.type) {
    case SUPPORT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TICKET:
      let tickets = state.tickets;
      tickets.push(action.payload);
      return {
        ...state,
        loading: false,
        tickets: tickets,
        errors: {},
      };
    case ADD_TICKET_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
        loading: false,
      };
    case GET_TICKETS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case GET_TICKET:
      return {
        ...state,
        ticket: action.payload,
        loading: false,
      };
    case GET_TICKET_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case ADD_TICKET_CONVERSATION:
      return {
        ...state,
        loading: false,
        ticket: action.payload,
      };
    case ADD_TICKET_CONVERSATION_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
