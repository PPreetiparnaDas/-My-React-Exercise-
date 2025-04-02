import React from 'react'

function Jsx() {
    const x = 15;
  return (
    <div>
     <h1>I Love JSX!</h1>;
     <hr/>
     <h1>React is {5 + 5} times better with JSX</h1>
     <hr/>
     <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
    <hr/>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
    <hr/>
   
    <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>
    </div>

  )
}

export default Jsx
