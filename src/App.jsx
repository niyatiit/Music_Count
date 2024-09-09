import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
function App() {

  const data = [
    {
      images: "https://i.ytimg.com/vi/KLb5BXAXFK0/maxresdefault.jpg",
      Song: "Ayi Nai",
      Singer: "Sachin-jigar",
      added: true,
    },
    {
      images: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240524175018.jpg",
      Song: "Soni Soni",
      Singer: "Darsan Raval",
      added: true,
    },
    {
      images: "https://i.ytimg.com/vi/JmD1Z4AmAvc/maxresdefault.jpg",
      Song: "Taras Nai Aya Tujko",
      Singer: "Sachin-jigar",
      added: false,
    },
    {
      images: "https://i.ytimg.com/vi/YHQ1Iyi_SHw/hqdefault.jpg",
      Song: "Tainu Khabar Nai",
      Singer: "Arijit Song",
      added: false,
    },
    {
      images: "https://i.ytimg.com/vi/Rabj-Uvqzjs/maxresdefault.jpg",
      Song: "Soulmate",
      Singer: "Arijit Song",
      added: false,
    },
    {
      images:
        "https://www.ilyricshub.com/wp-content/uploads/2024/05/dekha-tenu-mr-mrs-mahi.jpg",
      Song: "Dekha Tenu",
      Singer: "Mohammad Faiz",
      added: false,
    },
    {
      images: "https://i.ytimg.com/vi/Zlqf9cuaOBw/maxresdefault.jpg",
      Song: "O Maahi",
      Singer: "Arijit Song",
      added: false,
    },
    {
      images: "https://i.ytimg.com/vi/oEjFgJX_9eo/maxresdefault.jpg",
      Song: "Teri Baaton Uljha Jiya",
      Singer: "Raghav",
      added: false,
    },
    {
      images:
        "https://timesofindia.indiatimes.com/photo/msid-107104728,imgsize-172626.cms",
      Song: "Akhiyaan Gulaab",
      Singer: "Mitraz",
      added: false,
    },
  ];

  const[songData , setSongData] = useState(data)
 
  const handleClick = (index) =>{
    setSongData((prev) =>{
      return prev.map((item , itemindex)=>{
        if(itemindex === index) return{...item, added: !item.added };
        return item;
      })
    })
  }


  return (
    <>
      <div className="w-full h-full bg-zinc-800 text-white">
        <Navbar data={songData}/>

        <div className="flex flex-wrap items-center justify-around">
          {songData.map((item , index) => (
            <Card key={index} index={index} data={item} handleClick={handleClick}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
