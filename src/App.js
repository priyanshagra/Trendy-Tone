
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Yourorder from './components/Yourorder';
import OrderState from './context/order/OrderState';
import Profile from './components/Profile';



function App() {
  return (
    <>
    <OrderState>
      
      <Router>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route exact path="/" Component={Home}/>
            <Route exact path="/about" Component={About}/>
            <Route exact path="/yourorder" Component={Yourorder}/>
            <Route exact path="/profile" Component={Profile}/>
          </Routes>
          </div>
      </Router>
      
    </OrderState>
    </>
  );
}

export default App;
