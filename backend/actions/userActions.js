import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      header: {
        "Content-type": "application/json"
      }
    };
    const { data } = await axios.post(
      "api/users/login",
      { email, password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const register = (name, email, password, password2) => async (
  dispatch
) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      header: {
        "Content-type": "application/json"
      }
    };
    const { data } = await axios.post(
      "/api/users",
      { name, email, password, password2 },
      config
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};