import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = (props) => {

  

    const [credentials,setCredentials]=useState({email:"",password:""})
    let navigate = useNavigate();



    const handleSubmit=async (e)=>{
     
       

        e.preventDefault();
        const response=await fetch("http://localhost:8000/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"

            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success)
        {
          localStorage.setItem('token',json.authtoken);
          props.showAlert("login successfull ","success");
          navigate("/");
        }
        else
        {
          props.showAlert("invalid details or not created account yet go on signup page","danger");
        }
    } 
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    
    
    <div >
      <form onSubmit={handleSubmit}>
        <div className="mb-3" style={{position:"absolute",left:350}}>
          <label htmlFor="email" className="form-label">
          <strong>Email address</strong>  
          </label>
          <input
            type="email" name="email"
            className="form-control"
            id="email" value={credentials.email}
            aria-describedby="emailHelp" onChange={onChange} required style={{width:900}} 
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3" style={{position:"absolute",left:350,top:350}}>
          <label htmlFor="password" className="form-label">
          <strong>Password</strong>  
          </label>
          <input
            type="password"
            className="form-control" name="password" value={credentials.password}
            id="password" onChange={onChange} required style={{width:900}}
          />
        </div>
        <div style={{position:"absolute",left:750,top:450}}>
        <button type="submit" className="btn btn-primary"  >
          Login
        </button>
        </div>
      </form>
      <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  );
};

export default Login;
