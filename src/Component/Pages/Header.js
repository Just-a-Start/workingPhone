import React, { Component } from 'react';
import '../Pages/Home.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';
import image5 from '../../img/5.jpg';
import image6 from '../../img/6.jpg';
import image7 from '../../img/7.jpg';
import image8 from '../../img/8.jpg';
import image9 from '../../img/9.jpg';
import image10 from '../../img/10.jpg';
import image11 from '../../img/11.jpg';

class Header extends Component {
    render() {
        return (
            
            <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src={image1} className="sliderimg"/>
                    <img src={image2} className="sliderimg"/>
                    <img src={image3} className="sliderimg"/>
                    <img src={image4} className="sliderimg"/>
                    <img src={image5} className="sliderimg"/>
                    <img src={image6} className="sliderimg"/>
                    <img src={image7} className="sliderimg"/>
                    <img src={image8} className="sliderimg"/>
                    <img src={image9} className="sliderimg"/>
                    <img src={image10} className="sliderimg"/>
                    <img src={image11} className="sliderimg"/>
</AliceCarousel>
        );
    }
}

export default Header;