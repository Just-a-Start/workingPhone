import React, { Component } from 'react';
import {Switch ,  Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Component/Navbar";
import  Cart from "./Component/Cart/Cart"
import Details from "./Component/Details.js";
import Default from "./Component/Default.js";
import ProductList from "./Component/ProductList.js";
import Modal from "./Component/Modal"
import Home from './Component/Pages/Home';
import Aboutus from './Component/Pages/Aboutus';
import Services from './Component/Pages/Services';
import Navigation from './Component/Navigation';




class App extends Component {
  state = {  }
  render() { 
    return ( <React.Fragment>
      <Navigation></Navigation>
      <Navbar></Navbar>
      <Switch>
      <Route exact path ="/" component={Home}></Route>
        <Route path ="/product" component={ProductList}></Route>
        <Route path ="/details" component={Details}></Route>
        <Route path ="/cart" component={Cart}></Route>
        <Route path ="/aboutus" component={Aboutus}></Route>
        <Route path ="/service" component={Services}></Route>
        <Route component={Default}></Route> 
      </Switch>
      <Modal></Modal>
    </React.Fragment> 
    
    );
  }
}
 
export default App;






