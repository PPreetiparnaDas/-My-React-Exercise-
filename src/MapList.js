import React from "react";
import './MapList.css'; 
const MapList = () => {
  const myArray = ["apple", "banana", "orange"]; 

  return (
    <div>
      {myArray.map((item, index) => (
        <p key={index}>{item}</p>
        
      ))}
    </div>
  );
};

export default MapList;
