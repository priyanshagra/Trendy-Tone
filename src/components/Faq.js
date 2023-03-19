import React from 'react'
import faq from './images/faq.png'
const Faq = () => {
  return (
    <div>
       <div style={{float: 'right'}}>
          <img src={faq} alt="FAQs" />
        </div>
        <ul>
          <h3 style={{color: 'red'}}>General Queries</h3>
          <li><b>Q.How can I check my order status?</b>
            <div>To check your order status you can click on <b>Check Order Status</b> in your order mail sent by us on your registered email id.
            </div>
          </li>
          <br />
          <li>
            <b>Q.What are the different modes of payment available?</b>
            <div>You can use any one of the following payment methods:
              <ul>
                <li>Credit card</li>
                <li>Credit card EMI of leading banks</li>
                <li>Debit card</li>
                <li>Net Banking</li>
                <li>Cash on Delivery</li>
              </ul>
            </div>
          </li>
          <br />
          <li>
            <b>Q.Can I cancel my order?</b>
            <div>You cannot cancel your order.</div>
          </li>   
          <br />  
          <li>
            <b>Q.How to recover your password?</b>
            <div>
              To recover your password enter your email id and click on <b>Forgot password</b> while you are on the login page.
              <br />A mail will be sent to you where you can enter your new password and then click on ok</div>
          </li>
          <br />
          <li>
            <b>Q.When will i receive my order?</b>
            <div>
              You will receive your order within 15 days of order. 
            </div> 
          </li>
          <br />
          <li><b>Q.How to order any product?</b>
            <div>
              <ol><li>You can select desired sections: <b>Men,Women or Child.</b></li> <li>You can choose your desired outline and then choose primary color,secondary color and so on.
                </li>
                <li>Once you are satisfied with your customisations ,   click on <b>Add to Cart</b> option.</li>
                <li>Click on <b>Buy</b> option. </li> 
              </ol></div>
          </li>
          <br />
        </ul>
    </div>
  )
}

export default Faq
