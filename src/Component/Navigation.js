import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className = "navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
                <Link to = "/"><span className ="text-info navbar-brand">Green Associates</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link to = "/" className="nav-link"><i className="fab fa-facebook"></i></Link></li> 
                    <li className="nav-item"><Link to = "/" className="nav-link"><i className="fab fa-instagram"></i></Link></li>
                    <li className="nav-item"><Link to = "/" className="nav-link"><i className="fab fa-twitter"></i></Link></li>
                </ul>
            </div>  
        </nav>
        )
    }
}
