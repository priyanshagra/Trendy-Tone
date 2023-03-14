import React,{useEffect} from 'react'
import {
    Link,useLocation
  } from "react-router-dom";




const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Trendy Tone</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current ="page" to="/">Home</Link>
        </li>
        
      
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about" >About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/faq"?"active":""}`} to="/faq" >Faq</Link>
        </li>
        </ul>
        <li className="d-flex mx-2">
        <Link className="btn btn-primary" to="/login" role="button">Login</Link>
        </li>
        <li className="d-flex mx-2">
        <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>
        </li>
    
        <li className="d-flex mx-2">
          <Link className={`nav-link ${location.pathname==="/yourorder"?"active":""}`} to="/yourorder" >
          <i className="fa-solid fa-cart-shopping">ORDERS</i>
          </Link>
        </li>
        
      <li className="d-flex mx-2">
          <Link className={`nav-link ${location.pathname==="/profile"?"active":""}`} to="/profile" >
          <i className="fa-solid fa-user">USER</i>
          </Link>
        </li>
    
    </div>
  </div>
</nav>
  )
}

export default Navbar
