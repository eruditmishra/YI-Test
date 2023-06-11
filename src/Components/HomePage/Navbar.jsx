import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Navbar Container */}
      <div className="flex items-center justify-between mx-[7.5rem] pt-10">
        {/* Logo Text */}
        <div className="text-2xl font-bold">YourChallenge</div>
        {/* Nav Links */}
        <div>
          <ul className="flex gap-x-4 font-[400]  ">
            <li>Product</li>
            <li>Download</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
