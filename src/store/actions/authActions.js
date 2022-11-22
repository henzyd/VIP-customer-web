import * as types from "../actiontypes/authTypes";

export const login_a = (dispatch) => {
  dispatch({ type: types.ON_LOGIN_SUCCESSFUL });
};
