import * as types from "../actiontypes/authTypes";
function AuthReducer(state, action) {
  if (action.type === types.ON_LOGIN_SUCCESSFUL) {
    return {
      ...state,
      user: true
    };
  }
  return state;
}

export default AuthReducer;
