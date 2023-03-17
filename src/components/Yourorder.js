import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import OrderContext from '../context/order/orderContext';
import Orderitem from './Orderitem';



const Yourorder = () => {
  let navigate = useNavigate();
    const context = useContext(OrderContext);
    const {order ,getOrder} = context ;
    useEffect(() => {
      if (localStorage.getItem('token')){
      getOrder()
      }
      else{
        navigate("/login");
      }
    },[])

  return (
  
  
    <div className='container '>
        <h2>Your orders</h2>
      {order.length===0  &&  " Shoping start kardo"          }
        {order.map(
            (orders)=>{
                return <Orderitem orders = {orders}/>
            }
        )
      }
    </div>
    
  )
}

export default Yourorder
