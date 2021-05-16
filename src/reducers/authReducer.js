import { LOGIN } from "../actions/types";
const initialState = {
  isAuthenticated: false,
  user: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    default:
      return state;
  }
}
