import React, {Fragment, useState, useEffect } from "react";
import axios from "axios";
import './user.css'
function UserList() {
 const [data, setData] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios.get(
       "https://jsonplaceholder.typicode.com/users"
     );
     setData(result.data);
     console.log("updated")
   };
   fetchData();
   console.log("mounted")

 }, []);
 return (
     <Fragment>
  
     {data.map(item => (
         
     <div className='bord'>
       <li key={item.id}> <p><b>id: </b>{item.id}</p></li>
         <p><b>Name: </b>{item.name}</p >
         <p><b>Username: </b>{item.username}</p>
         <p><b>Email: </b>{item.email}</p>
        <p><b>Street: </b>{item.address.street}</p>
        <p><b>Suite: </b>{item.address.suite}</p>
        <p><b>City: </b>{item.address.city}</p>
        <p><b>Code postal: </b>{item.address.zipcode}</p>
        <p><b>geo: </b>{item.address.geo.lat}  ,  {item.address.geo.lng}</p>
       </div>
     ))} 
  
   </Fragment>
 );
}
export default UserList;