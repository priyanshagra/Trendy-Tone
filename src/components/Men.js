import React from "react";
import { Link } from "react-router-dom";

const Men = () => {
  return (
  
    <div className="row ">
      <h1>men's wear</h1>
      <div className="col-md-6">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary">
            PROCEED TO BUY
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
      <div className="col-md-6" >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Men;
