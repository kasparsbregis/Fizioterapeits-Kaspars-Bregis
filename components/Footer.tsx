import React from "react";
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="mt-20 flex w-full flex-col items-center border-t border-black px-6 py-4">
      <p className="text-center text-sm">
        © {currentYear} Breģis Kaspars - fizioterapeita prakse
      </p>
    </div>
  );
};

export default Footer;
