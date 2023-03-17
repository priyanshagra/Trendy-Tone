import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
    <div style={{textAlign:"center"}}>
      <strong>For Further Queries Please Click on the Link Below </strong>
      
    </div>
    <div  style={{textAlign:"center"}}>
       <Link to="/contactus" role="button">Contact us</Link>
    </div>
    <div style={{textAlign:"center",margin:15}}>
       <h4>OUR TEAM</h4>
       <ul style={{listStyleType:"none"}}>
        <li>
            Priyansh Agrawal
        </li>
        <li>
            Rajat Mantri
        </li>
        <li>
            Prakhar Srivastava
        </li>
        <li>
            Piyush Sahu
        </li>
        </ul> 
    </div>
    <div style={{textAlign:"center",margin:15}}>
      <h4> &copy; Copyright2023 By TrendyTone.com</h4>   
    </div>
    </div>
  )
}

export default Footer
