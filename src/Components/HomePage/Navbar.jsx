import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Navbar Container */}
      <div className="flex items-center justify-between mx-[7.5rem] pt-10">
        {/* Logo Text */}
        <div className="text-2xl font-bold">YourChallenge</div>
        {/* Nav Links container*/}
        <div>
          <ul className="flex gap-x-4 font-[400] items-center">
            <li className=" cursor-pointer border-b-[#E16259] border-2">
              Product
            </li>
            <li className=" cursor-pointer">Download</li>
            <li className=" cursor-pointer">Pricing</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
