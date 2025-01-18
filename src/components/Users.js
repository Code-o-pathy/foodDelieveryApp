import { useEffect, useState } from "react";

const Users = ({ name }) => {
  const [count, setCount] = useState(0);


  // useEffect(()=>{
  //   const timer = setInterval(() => {
  //     console.log("interval");
  //   }, 1000);
  //   //clearInterval(timer)-cant clear like this,

  //   return()=>{
  //     clearInterval(timer)
  //   }
  // },[])
  return (
    <div className="user-card">
      <h1>Name:{name}</h1>
      <h2>Count: {count}</h2>
      <h2>Job Description: FrontEnd Web Developer</h2>
      <h3>Locality: Malad, Mumbai</h3>
    </div>
  );
};

export default Users;
