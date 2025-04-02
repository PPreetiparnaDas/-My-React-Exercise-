import React from 'react'
import { useState, useEffect } from "react";
function SetTime() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });
  return (
    <div>
       return <h1>I have rendered {count} times!</h1>;
    </div>
  )
}

export default SetTime
