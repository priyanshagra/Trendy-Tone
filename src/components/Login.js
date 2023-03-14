import React, { useState } from "react";

const Login = () => {

    const [credentials,setCredentials]=useState({email:"",password:""})

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
    } 
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email" name="credentials.email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp" onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control" name="credentials.password"
            id="exampleInputPassword1" onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
