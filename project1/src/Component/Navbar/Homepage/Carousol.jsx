import "slick-slider/slick/slick.css";
import "slick-slider/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 9000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
    return (
      <div>

        <Slider {...settings}>
          <div >
          <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
          </div>
          <div >
          <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
          </div>
          <div >
          <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
          </div>
          <div >
          <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
          </div>
          <div >
          <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
          </div>
          <div >
          <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
          </div>
          <div >
          <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
          </div>
          <div >
          <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
          </div>
          <div >
          <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
          </div>
          <div >
          <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
          </div>






        </Slider>
      </div>
    );
  }
}