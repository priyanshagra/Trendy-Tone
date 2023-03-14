import React from 'react'
const Orderitem = (props) => {
    
   const {orders} = props;
   
  return (
    <div>
        
    
        <div className="card my-3 ">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{orders.title}</h5>
        <p className="card-text">{orders.description}</p>
        </div>
        </div >
    </div>
  )
}

export default Orderitem
