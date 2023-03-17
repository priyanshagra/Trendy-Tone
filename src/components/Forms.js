import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import orderContext from "../context/order/orderContext";
import { orderTitle } from "./Kids";
import Gown from  './images/Gown.jpg';

const Forms = (props) => {
  let navigate = useNavigate();
  const context = useContext(orderContext);
  const { addOrder } = context;

  const [order, setOrder] = useState({ title: "{orderTitle}", primary_colour:"",secondary_colour:"",sleeve:"",collar:"",titletoshow:"",position:"" });

  const handleSubmit = () => {
    addOrder(order.title, order.primary_colour,order.secondary_colour,order.sleeve,order.collar,order.titletoshow,order.position);
    props.showAlert(
      "Congrutulation order bought successfully payment details will be sent on email!HAPPY SHOPPING",
      "success"
    );
    navigate("/");
  };
  const onChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div >
        <img src={Gown} alt={orderTitle}/> 
      </div>
      <strong >{orderTitle}</strong>
      <form onSubmit={handleSubmit}>
        <strong>Primary Colour</strong>
        <div className="row my-2">
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="primary_colour"
              id="white"
              value={order.primary_colour}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              white
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="primary_colour"
              id="blue"
              value={order.primary_colour}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              blue
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="primary_colour"
              id="orange"
              value={order.primary_colour}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              orange
            </label>
          </div>
          <div className="form-check col-md-2">
            <input
              className="form-check-input"
              type="radio"
              name="primary_colour"
              id="green"
              value={order.primary_colour}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              green
            </label>
          </div>
          <div className="form-check col-md-2">
            <input
              className="form-check-input"
              type="radio"
              name="primary_colour"
              id="yellow"
              value={order.primary_colour}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              yellow
            </label>
          </div>
        </div>
        <strong>Secondary Colour</strong>
        <div className="row my-2">
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="secondary_colour"
              id="white"
              value={order.secondary_colour}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              white
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="secondary_colour"
              id="blue"
              value={order.secondary_colour}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              blue
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="secondary_colour"
              id="orange"
              value={order.secondary_colour}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              orange
            </label>
          </div>
          <div className="form-check col-md-2">
            <input
              className="form-check-input"
              type="radio"
              name="secondary_colour"
              id="green"
              value={order.secondary_colour}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              green
            </label>
          </div>
        </div>
        <strong>Sleeve</strong>
        <div className="row my-2">
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="sleeve"
              id="short"
              value={order.sleeve}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             short
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="sleeve"
              id="bell"
              value={order.sleeve}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              bell
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="sleeve"
              id="full"
              value={order.sleeve}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              full
            </label>
          </div>
        </div>
        <strong>Collar</strong>
        <div className="row my-2">
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="collar"
              id="shawl"
              value={order.sleeve}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             Shawl
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="collar"
              id="peterpan"
              value={order.sleeve}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Peter pan
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="collar"
              id="v-necline"
              value={order.sleeve}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              v-neckline
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <strong>Add title to preview</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="titletoshow"
            onChange={onChange}
            value={order.titletoshow}
            required
            minlength={5}
            aria-describedby="emailHelp"
          />
        </div>
        <strong>Postion of added item</strong>
        <div className="row my-2">
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="position"
              id="Fronttop"
              value={order.position}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             Front-top
            </label>
          </div>
          <div className="form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="position"
              id="Frontmiddle"
              value={order.position}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
            Front-middle
            </label>
          </div>
          <div className=" form-check col-md-2 ">
            <input
              className="form-check-input"
              type="radio"
              name="position"
              id="Frontlast"
              value={order.position}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
             Front-last
            </label>
          </div>
        </div>


        <button
          type="submit"
          className="btn btn-primary"
        >
          PROCEED TO BUY
        </button>
      </form>
    </div>
  );
};

export default Forms;
