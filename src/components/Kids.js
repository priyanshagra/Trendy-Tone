import React from 'react'
import { Link } from "react-router-dom";
import kid5 from  './images/Gown.jpg';
import kid2 from './images/kid2.jpg'
import kid3 from './images/kid3.jpg'
import kid4 from './images/kid4.jpg'
import Gown from './images/kid5.jpg'

let orderTitle1="";

  

  


const Kids = () => {
  const addtitle1=(e)=>{
  orderTitle1="gown"
  }
  const addtitle2=(e)=>{
    orderTitle1="frock"
  }
  const addtitle3 =(e)=>{
    orderTitle1="frocksuit"
  }
  const addtitle4 =(e)=>{
    orderTitle1="Generalkurti"
  }
  const addtitle5 =(e)=>{
    orderTitle1="Modernkurti"
  }



  
  return (








    <div className="row ">
      <h1>Kids wear</h1>
      <div className="col-md-6">
        <img src={Gown} className="card-img-top" alt="..." style={{height:310}} />
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
        <img src={kid2} className="card-img-top" alt="..." style={{height:310}} />
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Frock</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addtitle2} >
            Proceed To Buy
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src={kid3} className="card-img-top" alt="..." style={{height:310}}/>
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Frocksuit</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addtitle3}>
          Proceed To Buy
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src={kid4} className="card-img-top" alt="..." style={{height:310}}/>
        <div className="card-body"  style={{textAlign:"center"}}>
          <h5 className="card-title">Generalkurti</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addtitle4}>
          Proceed To Buy
          </Link>
        </div>
      </div>
      <div className="col-md-6" >
        <img src={kid5} className="card-img-top" alt="..." style={{height:310}} />
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Modernkurti</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addtitle5}>
          Proceed To Buy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Kids;

export {orderTitle1}