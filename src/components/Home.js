import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" row my-4 mx-3">
        <div className="col-md-4">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">MENS</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/men" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">WOMEN</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/women" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">KIDS</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/kid" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Home;
