import { useState } from "react";
import OrderContext from "./orderContext";

const OrderState = (props) => {
  const orderInitial = [];
  const [order, setOrder] = useState(orderInitial);
  //method to fetch all order
  const getOrder = async () => {
    const response = await fetch(
      "http://localhost:8000/api/order/fetchallorder",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
      }
    );
    const json = await response.json();
    setOrder(json);
  };
  //method to add all orders
  const addOrder = async (title,description)=>{
    

    const response = await fetch("http://localhost:8000/api/order/addorder",{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "auth-token":localStorage.getItem('token')
        },
        body:JSON.stringify({title,description})
    });
    

    const orders = await response.json();
    setOrder(order.concat(orders))
}


  return (
    <OrderContext.Provider value={{ order, setOrder, getOrder,addOrder }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;
