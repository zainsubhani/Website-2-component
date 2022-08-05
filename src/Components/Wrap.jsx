import React from "react";
import Abstract from "./Bar/index";
import Help from "./help/index";
import Box from "./Box/index";
import Footer from "./Footer/index";

const Wrap = () => {
  return (
    <div>
      <Abstract />

      <Help />
      <div>
        <Box />
      </div>
      <Footer />
    </div>
  );
};

export default Wrap;
