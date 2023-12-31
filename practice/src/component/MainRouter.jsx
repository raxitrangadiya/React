import { Route, Routes, createBrowserRouter } from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx'
import Home from './Navbar/Home.jsx'
import Skill from './Navbar/Skill.jsx'
import Project from './Navbar/Project.jsx'
import Aboutus from './Navbar/Aboutus.jsx'
import Contactus from './Navbar/Contactus.jsx'
import Classwork from './Navbar/practice/classwork/Classwork.jsx'
// import Mywork from './Navbar/practice/mywork/Mywork.jsx'
import Loader from './Loader.jsx'
import React, { Suspense } from "react";
// const Classcomponent = React.lazy(() => import("./Navbar/practice/classwork/Classrouter.jsx"))
const ClassCompoMenu = React.lazy(()=> import("./Navbar/practice/classwork/classcomponent/Classrouter.jsx"))
const Functionalcomponent = React.lazy(()=> import("./Navbar/practice/classwork/FunctionCompoMenu/FunctionalRouter.jsx"))
// const Functionalcomponent= React.lazy(()=> {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(import("./Navbar/practice/classwork/Functionalcomponent/Functional.jsx")), 1000);
//       });
// })
const router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /><Home /></>
    },
    {
        path: "/skill",
        element: <><Navbar /><Skill /></>
    },
    {
        path: "/project",
        element: <><Navbar /><Project /></>
    },
    {
        path: "/aboutus",
        element: <><Navbar /><Aboutus /></>,
    },
    {
        path: "/contactus",
        element: <><Navbar /><Contactus /></>
    },
    {
        path: "/classwork",
        element: <><Navbar /><Classwork/></>,
        children : [
        {
            path: "classcompo/*",
            element :<Suspense fallback={<Loader/>}><ClassCompoMenu/></Suspense>
        },
        {
            path: "functional/*",
            element :<Suspense fallback={<Loader/>}><Functionalcomponent/></Suspense>
        }
       ]
    },
   
    // {
    //     path: "/mywork",
    //     element: <><Navbar /><Mywork /></>,
    //     // Children:[
    //     //     {
    //     //         path:"/functionalcomponent/*",
    //     //         element :<Suspense fallback={<Loader/>}><Functionalcomponent/></Suspense>
    //     //     }
    //     // ]
    // }


])
export default router;