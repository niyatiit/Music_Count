import React from "react";

function Card( {data , handleClick , index}) {

  const {images ,Song , Singer , added } = data;

  return (
    <>
      <div>
        <div className="w-64 h-80 bg-zinc-700 m-14 rounded-xl mt-32">
          <div className="w-full h-40 bg-white rounded-xl overflow-hidden">
            <img
              src={images}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="p-2 pt-5 " >
            <h2>
              {" "}
              <strong> Song : </strong> {Song}
            </h2>
            <h2>
              {" "}
              <strong> Singer :</strong> {Singer}
            </h2>
            <button onClick={()=>handleClick(index)} className={`${added === false ? "bg-pink-800" : "bg-green-800"} font-semibold p-2 rounded-xl relative top-[70px] w-full`}>
              {added === false ? "Add to Fav." : "Add"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
