import "slick-slider/slick/slick.css";
import "slick-slider/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 9000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgd3f7uJeAJXEMdnEixpFEm89o1Bft1-VMw&usqp=CAU"/>
          </div>
          <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgd3f7uJeAJXEMdnEixpFEm89o1Bft1-VMw&usqp=CAU"/>
          </div>
          <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgd3f7uJeAJXEMdnEixpFEm89o1Bft1-VMw&usqp=CAU"/>
          </div>
          <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgd3f7uJeAJXEMdnEixpFEm89o1Bft1-VMw&usqp=CAU"/>
          </div>
          <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgd3f7uJeAJXEMdnEixpFEm89o1Bft1-VMw&usqp=CAU"/>
          </div>
          <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgd3f7uJeAJXEMdnEixpFEm89o1Bft1-VMw&usqp=CAU"/>
          </div>
          <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgd3f7uJeAJXEMdnEixpFEm89o1Bft1-VMw&usqp=CAU"/>
          </div>
          <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgd3f7uJeAJXEMdnEixpFEm89o1Bft1-VMw&usqp=CAU"/>
          </div>
          <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgd3f7uJeAJXEMdnEixpFEm89o1Bft1-VMw&usqp=CAU"/>
          </div>
        
         
        
          
        
        </Slider>
      </div>
    );
  }
}