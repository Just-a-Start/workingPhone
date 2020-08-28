import React, { Component } from 'react'
import '../Pages/Home.css'
import ProductList from '../ProductList'
import Aboutus from './Aboutus'
import Footer from './Footer'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">
            <h1 className="display-2">Green Associates</h1><br/>
        </div>
        <ProductList></ProductList>
        <Aboutus></Aboutus>
        <Footer></Footer>





            </React.Fragment>
            
        )
    }
}
