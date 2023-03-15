import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import orderContext from "../context/order/orderContext" 

const Forms = (props) => {
  let navigate = useNavigate();
  const context = useContext(orderContext);
  const {addOrder}=context;

  const [order, setOrder] = useState({ title: "", description: "" });
  

  const handleSubmit =  () => {
     addOrder(order.title,order.description);
     props.showAlert("Congrutulation order bought successfully payment details will be sent on email!HAPPY SHOPPING","success");
     navigate("/");
  };
  const onChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            TITLE
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            required minlength={5}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Discription
          </label>
          <input
            type="text area"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange} minLength={5}
            required
            aria-describedby="emailHelp"
          />
        </div>

        <button disabled={order.title.length<5|| order.description.length<5} type="submit" className="btn btn-primary">
          PROCEED TO BUY
        </button>
      </form>
    </div>
  );
};

export default Forms;
