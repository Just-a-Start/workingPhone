import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//import { Link } from 'react-router-dom';
//import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import './bootstrap.css'
import Achievements from './achivements.js'

class testimonial extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className='row bg-dark text-white'>
                    <h1 className='col-sm-12 text-center font-italic text-info'>Testimonial</h1>
                    <br/>
                </div>
                <div className='row bg-dark text-white'>
                    <div className='col-sm-4'>
                        <ul>
                        <h5 className='text-info'>Our Mission</h5>
                            <li>Working towards satisfaction of our customers.</li>
                            <li>Working for well-being of our stakeholders and for the benefit of our society which we are part of.</li>
                            <li>We pursue the path of continuous improvement.</li>
                        </ul>
                    </div>
                    <div className='col-sm-4'>
                        <ul>
                        <h5 className='text-info'>Our Vision</h5>
                            <li>To be the leaderof our business which is so vital to people's well-being
                            as well as for the environment in which we live .</li>
                        </ul>
                    </div>
                    <div className='col-sm-4'>
                        <ul>
                            <h5 className='text-info'>Our Values</h5>
                            <li>Customer Satisfaction</li>
                            <li>Protection of Environment</li>
                            <li>Ethical, discplined work through teamwork</li>
                            <li>Pursuing excellence through continuous RnD <br/> and employee training</li>
                            <li>Work Ethics inspired by professionalism and integrity</li>
                            <li>Safe and Congenial work environment</li>
                        </ul><br/>
                    </div>
                </div>
                <div className='row bg-dark text-white' >
                    <div className='col-sm-3 offset-3'>
        <Link to='/aboutus' className="nav-link"><h5>About Us &gt;&gt;</h5>{testimonial}</Link>
                    </div><br/><br/>
                    <div className='col-sm-3'>
        <Link to='./Achievements' className="nav-link"><h5>Our Achievements &gt;&gt;</h5>{Achievements}</Link>
                        {/* <a href="./achivements.js"><h5>Our Achievements &gt;&gt;</h5></a> */}
                    </div> 
                </div>
            </React.Fragment>
        )
    }
}

export default testimonial;