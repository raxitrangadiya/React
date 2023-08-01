import React, { Component } from 'react';
import { people } from './people.js'
import { getImageUrl } from './utils.js';
class Listinclasscomponent extends Component {
    render() {
        let ListData = people.map((anything, index) => {
            console.log(anything.name);
            return <li key={index}>
                <img src={getImageUrl(anything)} alt={anything.name} />
                <p><b>{anything.name}</b>&nbsp; {anything.profession} known for {anything.accomplishment}</p>
            </li>
        });
        return (
            <>
                <ul className='persondata'>
                    {ListData}
                </ul>
            </>
        );
    }
}

export default Listinclasscomponent;