import React from "react";
import { ThemeProvider } from "styled-components";
import { GLobalStyles, Themes } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Stores
import { Store } from "./store/contexts/AppContext";

// pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Example from "./pages/Example";
import Docs from "./pages/Docs";
import Login from "pages/auth/Login";
import FAQ from "./pages/FAQ";
import Help from "pages/Help";
import SignUp from "./pages/auth/SignUp";
import Privacy from "./pages/Privacy";
import Mission from "pages/Mission";
import Team from "./pages/Team";
import Demo from "components/Demo/Demo";
import Feature from "pages/Feature";
import PasswordChange from "./pages/PasswordChange";
import PasswordRecovery from "./pages/PasswordRecovery";
import Profile from "pages/Profile";
import EditProfile from "pages/EditProfile";
import ErrorPage from "pages/ErrorPage";
import Terms from "pages/terms/Terms";
import Aboutus from "pages/Aboutus";
import Consultation from "pages/Consultation";

function App() {
  const { theme } = Store();

  return (
    <ThemeProvider theme={theme ? Themes.light : Themes.dark}>
      <GLobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/help" element={<Help />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/password-recovery">
            <Route index element={<PasswordRecovery />} />
            <Route path="change" element={<PasswordChange />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
