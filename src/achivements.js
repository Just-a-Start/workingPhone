import React from 'react';
//import Test from './Testimonial';
import './bootstrap.css';
// @ts-ignore
import img1 from './images/first.PNG';
// @ts-ignore
import img2 from './images/first.PNG';
// @ts-ignore
import img3 from './images/first.PNG';
// @ts-ignore
import img4 from './images/first.PNG';


class achievements extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="bg-dark">
                <div className="text-center text-info font-italic">
                    <h3>Our Achievements</h3><br/>
                </div>
                <div className="row">
                    <div className='col-md-2 offset-1'>
                        <img src={img1} alt="ach1"></img>
                        <p className="text-white"></p>
                    </div>
                    <div className='col-md-2 offset-1'>
                        <img src={img2} alt="ach2"/>
                    </div>
                    <div className='col-md-2 offset-1'>
                        <img src={img3} alt="ach3"></img>
                    </div>
                    <div className='col-md-2 offset-1'>
                        <img src={img4} alt="ach4"></img>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
export default achievements;