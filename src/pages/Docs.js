import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

const Docs = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>I am a parent with side bar</h1>

            <h5>
              <Outlet />
            </h5>
          </div>
        }>
        <Route
          index
          element={
            <div>
              You meet me first when you navigate to docs. other nested routes
              swap me out
            </div>
          }
        />

        <Route path="usage" element={<div>I am a documentation</div>} />

        <Route
          path="somethingelse"
          element={<div>I am another documentation</div>}
        />
      </Route>
    </Routes>
  );
};

export default Docs;
