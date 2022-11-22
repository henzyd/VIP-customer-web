// Create actions here. Use short and descriptive names
// sufffix your function names with _a to indicate its an action function

import * as types from "../actiontypes/appTypes";

export const sayHello_a = (dispatch, payload) => {
  dispatch({ type: types.SAY_HELLO, payload });
};

export const setTheme_a = (dispatch, payload) => {
  dispatch({ type: types.SET_THEME, payload });
};
