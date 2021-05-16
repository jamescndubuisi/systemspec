// register user
// import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import { GET_ERRORS, LOGIN } from "./types";
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//login - Get user token

export const loginUser = (userData) => (dispatch) => {
  axios
    .post("https://wallet.remita.net/api/authenticate", userData)
    .then((res) => {
      console.log(res.data);

      dispatch({
        type: LOGIN,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });

  //   axios
  //     .post("/api/users/login", userData)
  //     .then((res) => {
  //       // save to local storage
  //       const { token } = res.data;

  //       // set token to local storage
  //       localStorage.setItem("jwtToken", token);
  //       // set token to auth header
  //       setAuthToken(token);
  //     })
  //     .catch((err) =>
  //       dispatch({
  //         type: GET_ERRORS,
  //         payload: err.response.data,
  //       })
  //     );
};
