import React from "react";
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="w-full  flex flex-col items-center px-6 py-4 border-1 border-t border-black mt-24 md:mt-40">
      <p className="text-sm text-center">
        © {currentYear} Breģis Kaspars - fizioterapeita prakse
      </p>
    </div>
  );
};

export default Footer;
