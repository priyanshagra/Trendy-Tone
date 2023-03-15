
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Yourorder from './components/Yourorder';
import OrderState from './context/order/OrderState';
import Profile from './components/Profile';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Faq from './components/Faq';
import Forms from './components/Forms';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [alert,setAlert] = useState(null);
  const showAlert =(message,type)=>
  { 
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);

  }
  
  return (
    <>
    <OrderState>
      
      <Router>
        <Navbar/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/about" Component={About}/>
            <Route exact path="/faq" Component={Faq}/>
            <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
            <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}  /> 
            <Route exact path="/yourorder" Component={Yourorder}/>
            <Route exact path="/profile" Component={Profile}/>
            <Route exact path="/men" Component={Men}/>
            <Route exact path="/women" Component={Women}/>
            <Route exact path="/kid" Component={Kids}/>
            <Route exact path="/form" element={<Forms showAlert={showAlert}/>}/>
          </Routes>
          </div>
      </Router>
      
    </OrderState>
    </>
  );
  }

export default App;
