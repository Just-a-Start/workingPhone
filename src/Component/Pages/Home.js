import React, { Component } from 'react';
import '../Pages/Home.css';
import ProductList from '../ProductList';
import Aboutus from './Aboutus';
import Footer from './Footer';
import Header from './Header';


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">
                <h1 className="display-2 text-info text-center">Green Associates</h1>
                <Header><span>GreenAssociates</span></Header>
                
            
       

       <ProductList></ProductList>
        <Aboutus></Aboutus>
        <Footer></Footer>
   
       
        </div>




            </React.Fragment>
            
        )
    }
}
