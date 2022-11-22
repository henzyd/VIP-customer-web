import * as types from "../actiontypes/appTypes";

function AppReducer(state, action) {
  if (action.type === types.SAY_HELLO) {
    return {
      ...state,
      greet: "Hello Team Axe"
    };
  }

  if (action.type === types.SET_THEME) {
    const theme = action.payload;
    const localTheme = theme ? "light" : "dark";
    localStorage.setItem("theme", localTheme);

    return {
      ...state,
      theme: theme
    };
  }

  // next condition if(...){return state}....
  return state;
}

export default AppReducer;
