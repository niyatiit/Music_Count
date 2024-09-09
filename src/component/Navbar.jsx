import React, { useState } from "react";

function Navbar({ data }) {

  const[moad,setMode] = useState()
  return (
    <>
      <div className="flex justify-between items-center p-10 px-10 z-20 h-16 fixed w-full">
        <h3 className="font-extralight ">
        </h3>
        <div className="flex p-2 gap-3 bg-pink-800 rounded-xl font-semibold : hover:cursor-pointer">
          <h4> Favourites : </h4>
          <h3> {data.filter((item) => item.added).length} </h3>
        </div>
      </div>
    </>
  );
}

export default Navbar;
