import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "../reducers/AuthReducer";

const Context = createContext();
const initialState = { user: false };

const Authcontext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default Authcontext;
export const AuthStore = () => useContext(Context);

// declaring props
Authcontext.propTypes = {
  children: PropTypes.element.isRequired
};
