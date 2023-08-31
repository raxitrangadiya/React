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
        import PropsInFunction from './PropsinFunction.jsx'
        import UseeffectInFunction from './UseeffectInFunction.jsx'
        import ApiUseeffectInFunction from './ApiUseeffectInFunction.jsx'
        
class FunctionalRouter extends Component {
    render() {
        return (
        <Routes>
            <Route path='/' element={<FunctionMenu/>}>
                <Route path='/intro' element={<Functionintro/>}/>
                <Route path='/stateinfunctional' element={<StateInFunction/>}/>
                <Route path='/propsinfunctional' element={<PropsInFunction/>}/>
                <Route path='/useeffectinfunctional' element={<UseeffectInFunction/>}/>
                <Route path='/apiuseeffectinfunctional' element={<ApiUseeffectInFunction/>}/>
            </Route>
        </Routes>
        );
    }
}

export default FunctionalRouter;