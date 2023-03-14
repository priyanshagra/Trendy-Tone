import React, { useContext } from 'react'
import OrderContext from '../context/order/orderContext';
import Orderitem from './Orderitem';

const Yourorder = () => {
    const context = useContext(OrderContext);
    const {order,setOrder} = context ;
  return (
    <div className='container my-3'>
        <h2>Your orders</h2>
      {
        order.map(
            (orders)=>{
                return <Orderitem orders = {orders}/>
            }
        )
      }
    </div>
  )
}

export default Yourorder
