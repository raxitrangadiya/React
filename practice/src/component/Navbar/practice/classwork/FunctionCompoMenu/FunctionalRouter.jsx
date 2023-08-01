// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import FunctionMenu from './FunctionMenu';
// import Functionintro from './Intro'
// const Functionalrouter = () => {
    //     return (
        
        // <Routes>
        //     <Route path='/' element={<FunctionMenu/>}>
        //         <Route to='/intro' element={<Functionintro/>}/>
        //     </Route>
        // </Routes>
        //     );
        // };
        
        // export default Functionalrouter;
        import React, { Component } from 'react';
        import { Route, Routes } from 'react-router-dom';
        import FunctionMenu from './FunctionMenu';
        import Functionintro from './Intro'
        import StateInFunction from './StateinFunction.jsx'
        
class FunctionalRouter extends Component {
    render() {
        return (
        <Routes>
            <Route path='/' element={<FunctionMenu/>}>
                <Route path='/intro' element={<Functionintro/>}/>
                <Route path='/stateinfunctional' element={<StateInFunction/>}/>
            </Route>
        </Routes>
        );
    }
}

export default FunctionalRouter;