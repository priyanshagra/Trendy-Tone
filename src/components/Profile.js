import React, {useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  
  const detailInitial = [];
  const [detail, setDetail] = useState(detailInitial);
    const user= async()=>{
    const response = await fetch(
      "http://localhost:8000/api/auth/getuser",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      }
    );
    const json = await response.json();
     setDetail(json)
  
    }
    const navigate = useNavigate();
    useEffect(() => {
      if (localStorage.getItem('token')){
       user();
      }
      else
      { 
        navigate("/login");

      }
      
    })
  
    

  return (
    <div class="container">
      <h1>Your Name</h1>
      <h3> {detail.name}</h3>
    </div>
  )
}

export default Profile
