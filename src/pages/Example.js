import React from "react";
import ExampleComponent from "../components/example";
const Example = () => {
  // may be pass some props from pages
  //   do not complicate the page files with jsx
  // all jsx should happen in the components folder and assembled in the index of the corresponding folder or assembled here

  //   parent logics can be written here or in the index of the coresponding folder
  return (
    <>
      <ExampleComponent data={"some props"} />
    </>
  );
};

export default Example;
