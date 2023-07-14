import React, { Component } from 'react';
import Card from './card'
// import Webpimg from '../../../../../public/image/webp.jpg'
class Carddata extends Component {
    render() {
        return (
            <div>
                <div className="row mt-5">
                    <div className="col-lg-3"><Card cardtitle="hello" imageData='https://mdbootstrap.com/img/new/standard/nature/184.webp'/></div>
                    <div className="col-lg-3"><Card /></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                    <div className="col-lg-3"><Card/></div>
                </div>
            </div>
        );
    }
}

export default Carddata;