import React from 'react'
import { Link } from "react-router-dom";
import Gown from  './images/Gown.jpg';
 let orderTitle="";
const Kids = () => {
  const addtitle1=(e)=>{
    orderTitle="Gown";
  }
  
  return (
    <div className="row ">
      <h1>Kids wear</h1>
      <div className="col-md-6">
        <img src={Gown} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}}/>
        <div className="card-body"  style={{textAlign:"center"}} >
          <h5 className="card-title">Gown</h5>
          <strong>Stretchable Gown for Girls</strong>
          <p className="card-text">
            
            You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
              
          </p>
          <Link  to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" value="Stretchable Gown for Girls" onClick={addtitle1}  >
            Proceed To Buy
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
  )
}

export default Kids;

export {orderTitle}