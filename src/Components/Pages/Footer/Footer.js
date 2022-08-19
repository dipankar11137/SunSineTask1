import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="text-center p-5 mt-5">
      <p>Copyright &copy; {year} </p>
      <p>Develop By Dipankar Halder</p>
    </div>
  );
};

export default Footer;
