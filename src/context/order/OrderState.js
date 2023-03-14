import { useState } from "react";
import OrderContext from "./orderContext";


const OrderState =(props)=>{

    const orderInitial = [
        {
          "_id": "640e5b33f7c59c92dfe6f6c6",
          "user": "640e14b928452f5d6768128e",
          "title": "My title",
          "description": "dekho bhai sabka sath sab acha ho",
          "date": "2023-03-12T23:07:31.531Z",
          "__v": 0
        },
        {
            "_id": "640e5b33f7c59c92dfe6f6c6",
            "user": "640e14b928452f5d6768128e",
            "title": "My title",
            "description": "dekho bhai sabka sath sab acha ho",
            "date": "2023-03-12T23:07:31.531Z",
            "__v": 0
        }
      ]
      const [order, setOrder]= useState(orderInitial)

    return(
        <OrderContext.Provider value={{order,setOrder}}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderState;