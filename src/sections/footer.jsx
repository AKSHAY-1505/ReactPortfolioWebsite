import React from "react";
import Logo from "../components/logo";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="flex items-center justify-between">
        <Logo invert />
        <p className="text-base text-white font-semibold">Made with React</p>
      </footer>
    </div>
  );
};

export default Footer;
