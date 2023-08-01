import React, { Component } from 'react';
import CardData from "./card.jsx"
class PropsMethod extends Component {
    render() {
        return (
            <>
             <div className="row">
                <div className="col-lg-3">
                    <><CardData imgData="https://i.pinimg.com/originals/c2/81/e8/c281e883fcd89408574e6edddba374fc.png" Cardtitle="Elon Musk" cardText=" Elon Reeve Musk (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a business magnate and investor. He is the founder, chairman, CEO, and chief technology officer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; owner and CTO of Twitter; founder of the Bori"/></>
                </div>
                
                <div className="col-lg-3">
                    <><CardData imgData="/images/steve.jpg" Cardtitle="Steve Jobs" cardText="Apple CEO John Sculley demands to know why the world believes he fired Jobs – Jobs was actually forced out by the Apple board, who were resolute on updating the Apple II following the Macintosh's lackluster sales"/></>
                </div>
                    <div className="col-lg-3">
                        <><CardData imgData="https://i.pinimg.com/originals/c2/81/e8/c281e883fcd89408574e6edddba374fc.png" Cardtitle="Elon Musk" cardText=" Elon Reeve Musk (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a business magnate and investor. He is the founder, chairman, CEO, and chief technology officer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; owner and CTO of Twitter; founder of the Bori"/></>
                    </div>
                    
                    <div className="col-lg-3">
                        <><CardData imgData="/images/steve.jpg" Cardtitle="Steve Jobs" cardText="Apple CEO John Sculley demands to know why the world believes he fired Jobs – Jobs was actually forced out by the Apple board, who were resolute on updating the Apple II following the Macintosh's lackluster sales"/></>
                    </div>
              
             </div>
            </>
        );
    }
}

export default PropsMethod;