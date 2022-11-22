import React from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import ExampleWrapper from "./example.styled";
import Footer from "./footer/Footer";

// all components and subcomponents can be assmebled here as shown below or can be exported from here and assembled in the corresponding pages file as shown in the commented code.

const index = () => {
  return (
    <ExampleWrapper>
      <Header />
      <Body />
      <Footer />
    </ExampleWrapper>
  );
};

export default index;

// example of export ...
// export {default as Header} from "./header/Header";
// export {default as Body} from "./body/Body";
// export {default as Footer} from "./footer/Footer";
