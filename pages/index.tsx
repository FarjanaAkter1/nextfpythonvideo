
// import { useEffect, useState } from "react"
// import React from "react";

// function Index() {
//   const [message, setMessage] = useState('Loading');
//  const [people, setPeople] =useState([]);

// useEffect (() =>{

//   fetch('http://localhost:8080/api/home')
//   .then((Response) => Response.json())
//   .then((data) => {
//   setMessage(data.message);
//   setPeople(data.people);
    
//   });

//   },[]);

//   return( 
//     <div>
      
//       <div>{message}</div>
//       {people.map((person, index) => (
//         <div key={index}>{person}</div>
//       ))}
//     </div>
//   );
// }
    
// export default Index;


import React, { useEffect, useState } from "react";

function Index() {
  const [message, setMessage] = useState('Loading');
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/home')
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setPeople(data.people);
        console.log(data.people)
      });
  }, []);

  return (
    <div>
      <div>{message}</div>

  {
  people.map((person, index) => (
        <div key={index}>{person}</div>
      ))
      }
    </div>
  );
}

export default Index;
