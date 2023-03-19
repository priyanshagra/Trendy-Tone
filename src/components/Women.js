import React from 'react'
import { Link } from "react-router-dom";
import women1 from  './images/women1.jpg';
import women2 from './images/women2.jpg'
import women3 from './images/women3.jpg'
import women4 from './images/women4.jpg'
import women5 from './images/women5.jpg'

let orderTitle2="";
const Women = () => {
  const addtitle1=(e)=>{
    orderTitle2="lehanga"
  }
  const addtitle2=(e)=>{
    orderTitle2="ladiesblazor" 
  }
  const addtitle3 =(e)=>{
    orderTitle2="normalgown"
  }
  const addtitle4 =(e)=>{
    orderTitle2="moderngown"
  }
  const addtitle5 =(e)=>{
    orderTitle2="westerngown"
  }










  return (
    <div className="row ">
      <h1>Women's wear</h1>
      <div className="col-md-6">
        <img src={women1} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}}/>
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Lehanga</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth  
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addtitle1}>
            Proceed to Buy
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src={women2} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}} />
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Ladies Blazor</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth  
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addtitle2}>
            Proceed to Buy
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src={women3} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}} />
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Normal Gown</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth  
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addtitle3}>
          Proceed to Buy
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src={women4} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}} />
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Modern Gown</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth  
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addtitle4}>
          Proceed to Buy
          </Link>
        </div>
      </div>
      <div className="col-md-6" >
        <img src={women5} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}} />
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Western Gown</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth  
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addtitle5}>
          Proceed to Buy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Women

export {orderTitle2}
