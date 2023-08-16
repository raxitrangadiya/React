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
<<<<<<< HEAD
        import PropsInFunction from './PropsinFunction.jsx'
        import UseeffectInFunction from './UseeffectInFunction.jsx'
=======
>>>>>>> 0f215ed3cc1a9bce9d94d1bff53a913b1bbdfe33
        
class FunctionalRouter extends Component {
    render() {
        return (
        <Routes>
            <Route path='/' element={<FunctionMenu/>}>
                <Route path='/intro' element={<Functionintro/>}/>
                <Route path='/stateinfunctional' element={<StateInFunction/>}/>
<<<<<<< HEAD
                <Route path='/propsinfunctional' element={<PropsInFunction/>}/>
                <Route path='/useeffectinfunctional' element={<UseeffectInFunction/>}/>
=======
>>>>>>> 0f215ed3cc1a9bce9d94d1bff53a913b1bbdfe33
            </Route>
        </Routes>
        );
    }
}

export default FunctionalRouter;