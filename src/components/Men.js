import React from "react";
import { Link } from "react-router-dom";
import men1 from  './images/men1.jpg';
import men2 from './images/men2.png';
import men3 from './images/men3.png';
import men4 from './images/men4.png';
import men5 from './images/men5.png';
let orderTitle3="";

  
  
const Men = () => {

  const addTitle1=(e)=>{
    orderTitle3="jacket-trouser"
  }
  const addTitle2=(e)=>{
    orderTitle3="kurta-pajama"
  }
  const addTitle3 =(e)=>{
    orderTitle3="t-shirt-trouser"
  }
  const addTitle4 =(e)=>{
    orderTitle3="t-shirt-lower"
  }
  const addTitle5 =(e)=>{
    orderTitle3="blazor-jeans"
  }
  



  return (
  
    <div className="row ">
      <h1>Men's wear</h1> 
      <div className="col-md-6">
        <img src={men1} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}} />
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Jacket and Trouser</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addTitle1}>
            PROCEED TO BUY
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src={men2} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}} />
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Kurta and Pajama</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addTitle2}>
          PROCEED TO BUY
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src={men3} className="card-img-top" alt="..."  style={{height: "457px",width: "471px" ,paddingLeft:"161px"}}/>
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">T-shirt and Trouser</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addTitle3}>
          PROCEED TO BUY
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <img src={men4} className="card-img-top" alt="..." style={{height: "457px",width: "471px" ,paddingLeft:"161px"}} />
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">T-shirt and lower</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary"  onClick={addTitle4}>
          PROCEED TO BUY
          </Link>
        </div>
      </div>
      <div className="col-md-6" >
        <img src={men5} className="card-img-top" alt="..."  style={{height: "457px",width: "471px" ,paddingLeft:"161px"}}/>
        <div className="card-body" style={{textAlign:"center"}}>
          <h5 className="card-title">Blazor and Jeans</h5>
          <p className="card-text">
          You can <strong> CHANGE PRIMARY COLOUR , SECONDARY COLOUR ,
            COLLAR ,SLEEVE 
              </strong> of cloth and <strong>OVERLAY TEXT</strong> on cloth 
          </p>
          <Link to={localStorage.getItem('token')?"/form":"/login"} className="btn btn-primary" onClick={addTitle5}>
          PROCEED TO BUY
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Men;

export {orderTitle3 }