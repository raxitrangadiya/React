// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import ClassCompMenu from "./Classcompmenu";
// import ClassCompoIntro from "./intro";
// const Classrouter = () => {
  //   return (
    //     <Routes>
    //       <Route path="/" element={<ClassCompMenu/>}>
    //         <Route path="classintro" element={<ClassCompoIntro/>}/>
    //       </Route>
    //     </Routes>
    //   );
    // };
    
    // export default Classrouter;
    
    import React, { Component } from 'react';
    import { Route, Routes } from 'react-router-dom';
    import Classcompmenu from './Classcompmenu';
    import ClassCompoIntro from "./intro";
    import StateMethod from "./StateMethod.jsx"
    import PropsMethod from './PropsMethod.jsx'
    import Lifecycle from './Lifecycle.jsx'
    import Statelifecycleloader from "./Statelifecycleloader.jsx"
class Classrouter extends Component {
  render() {
    return (
      <Routes>
<Route path='/' element={<Classcompmenu/>}>
<Route path='/classintro' element={<ClassCompoIntro/>} />
<Route path='/stateinclass' element={<StateMethod/>} />
<Route path='/propsinclass' element={<PropsMethod/>} />
<Route path='/lifecycle' element={<Lifecycle/>} />
<Route path='/statelifecycleloader' element={<Statelifecycleloader/>} />
</Route>
      </Routes>
    );
  }
}

export default Classrouter ;