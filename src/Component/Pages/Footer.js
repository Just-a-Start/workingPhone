import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Home from './Home';
var style = {
    width:"600" ,
    height:"450" ,
    frameborder:"0" ,
    border:"0",
    allowfullscreen:"", 
    
    
}


class Footer extends Component {
    render() {
        return (
            <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                    Address
                  </h5>
                  <p>
                    Green Associates,GanjPara durg,jalbandha chhatisgarh
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.168318513981!2d81.26836931404952!3d21.185471485913702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293c3bdaaaaaab%3A0x1f16400713acaa3a!2sLake%20view%20apartment%20ganjpara%20durg!5e0!3m2!1sen!2sin!4v1598638135665!5m2!1sen!2sin" style = {style}></iframe>
                  </p>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="2">
                  <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                    Our service
                  </h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">WaterProofing</a>
                    </li>
                    <li>
                      <a href="#!">Watertreatment</a>
                    </li>
                    <li>
                      <a href="#!">Link 3</a>
                    </li>
                    <li>
                      <a href="#!">Link 4</a>
                    </li>
                  </ul>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="2">
                  <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                    Links
                  </h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="#!">Service</a>
                    </li>
                    <li>
                      <a href="#!">About Us</a>
                    </li>
                    <li>
                      <a href="#!">Product</a>
                    </li>
                  </ul>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="2">
                  <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                    Coming Soon
                  </h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">New Product</a>
                    </li>
                    <li>
                      <a href="#!">New Product</a>
                    </li>
                    <li>
                      <a href="#!">New Product</a>
                    </li>
                    <li>
                      <a href="#!">New Product</a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <hr />
            <div className="text-center py-3">
              <ul className="list-unstyled list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="mb-1">Register for free</h5>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="btn btn-danger btn-rounded">
                    Sign up!
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <div className="text-center">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm btn-fb mx-1">
                    <i className="fab fa-facebook-f"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm btn-tw mx-1">
                    <i className="fab fa-twitter"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm btn-gplus mx-1">
                    <i className="fab fa-google-plus"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm btn-li mx-1">
                    <i className="fab fa-linkedin-in"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm btn-dribbble mx-1">
                    <i className="fab fa-dribbble"> </i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-copyright text-center text-success py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="/"> <span className="text-success">GreenAssociates</span> </a>
                <div className="text-info">Developed by:YHS GROUP</div>
                
              </MDBContainer>
            </div>
          </MDBFooter>







        );
    }
}

export default Footer;