import React from 'react'
import { Link } from "react-router-dom";
import Gown from  './images/Gown.jpg';
import kid2 from './images/kid2.jpg'
import kid3 from './images/kid3.jpg'
import kid4 from './images/kid4.jpg'
import kid5 from './images/kid5.jpg'

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
        <img src={kid2} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}} />
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary">
            Proceed To Buy
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src={kid3} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}}/>
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary">
          Proceed To Buy
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src={kid4} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}}/>
        <div className="card-body"  style={{textAlign:"center"}}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary">
          Proceed To Buy
          </Link>
        </div>
      </div>
      <div className="col-md-6" >
        <img src={kid5} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}} />
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary">
          Proceed To Buy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Kids;

export {orderTitle}