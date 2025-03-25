import React from "react";
import Button from "./button";

const nav = () => {
  return (
    <nav className="flex flex-wrap justify-evenly text-[#e9e9e9] bg-[#3182CE] sticky top-0 z-1">
      <div className="hidden sm:block">
        <ul className="flex text-2xl ">
          <li className="p-1 m-1 cursor-not-allowed transition hover:text-[#000000e7] active:font-bold">
            Home
          </li>
          <li className="p-1 m-1 cursor-not-allowed  transition hover:text-[#000000e7] active:font-bold">
            About
          </li>
          <li className="p-1 m-1 cursor-not-allowed  transition hover:text-[#000000e7] active:font-bold">
            Consult
          </li>
          <li className="p-1 m-1 cursor-not-allowed  transition hover:text-[#000000e7] active:font-bold ">
            Blogs
          </li>
        </ul>
      </div>

      <Button
        className="btn-slide cursor-pointer text-2xl rounded-[5px] p-2 border-[2px] border-[#3182CE] m-3 invisible sm:visible transition hover:bg-[#000] active:bg-[#55fff6] hover:text-[#3182CE] "
        name={"Calculate"}
      />
    </nav>
  );
};

export default nav;
