import React from "react";
import { Link } from "react-router-dom";

import kid from  './images/kid.jpg';
import men from  './images/mens.jpg';
import women from  './images/women.jpg';

const Home = () => {
  return (
    <div>
    <div className=" row mx-3" >
        <div className="col-md-4" >
          <img src={men}  className="card-img-top" alt="..."  />
          <div className="card-body" style={{textAlign:"center"}}>
            <h5 className="card-title">MENS</h5>
            <p className="card-text">
              Give Your Cloth Design as You Wish 
            </p>
            <Link to="/men" className="btn btn-primary">
              CHECKOUT
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <img src={women} className="card-img-top" alt="..." />
          <div className="card-body" style={{textAlign:"center"}}>
            <h5 className="card-title">WOMEN</h5>
            <p className="card-text">
            Give Your Cloth Design as You Wish
            </p>
            <Link to="/women" className="btn btn-primary">
              CHECKOUT
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <img src={kid} className="card-img-top" alt="..." />
          <div className="card-body" style={{textAlign:"center"}}>
            <h5 className="card-title">KIDS WEAR</h5>
            <p className="card-text">
              Give Your Child the Best Design and Fit
            </p>
            <Link to="/kid" className="btn btn-primary" >
              CHECKOUT
            </Link>
          </div>
        </div>
    </div>
   
    </div>
  );
};

export default Home;
