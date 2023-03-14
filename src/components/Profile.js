import React, { useContext } from 'react'
import OrderContext from '../context/order/orderContext';

const Profile = () => {
    const context = useContext(OrderContext);
    const {order,setOrder} = context ;
  return (
    <div>
      {
        order.map(
            (orders)=>{
                return orders.title
            }
        )
      }
    </div>
  )
}

export default Profile
