import React from "react";
import Profile from "../profile";
import Divider from "../divider";
import Footer from "../footer";
import Navbar from "../navbar";

export default () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <Divider />
      <Footer />
    </div>
  );
};
