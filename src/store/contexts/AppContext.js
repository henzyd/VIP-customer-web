import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import reducer from "../reducers/AppReducer";
import { setTheme_a } from "../actions/appActions";

const Context = createContext();
const initialState = { theme: true, greet: "" };

const Appcontext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Effect sets Theme on app load
  useEffect(() => {
    // get theme preference from local storage
    const localTheme = localStorage.getItem("theme") || "light";
    let theme = localTheme === "light";
    setTheme_a(dispatch, theme);
  }, []);

  function changeTheme() {
    setTheme_a(dispatch, !state.theme);
  }

  return (
    <Context.Provider value={{ ...state, dispatch, changeTheme }}>
      {children}
    </Context.Provider>
  );
};

export default Appcontext;
export const Store = () => useContext(Context);

Appcontext.propTypes = {
  children: PropTypes.element.isRequired
};
