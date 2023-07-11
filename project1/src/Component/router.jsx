import { createBrowserRouter } from "react-router-dom";
import NavCom from "./Navbar/navbar"
import Home from "./Navbar/Home.jsx";
import Link from "./Navbar/Link.jsx";
import Product from "./Navbar/Product.jsx";
import Contact from "./Navbar/Contact.jsx";
import Accessories from "./Navbar/Accessories.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <><NavCom/><Home /></>,
    },
    {
        path:"/link",
        element:<><NavCom/><Link/></>
    },
    {
        path:"/product",
        element:<><NavCom/><Product/></>
    },
    {
        path:"/contact",
        element:<><NavCom/><Contact/></>
    },
    {
        path:"/accessories",
        element:<><NavCom/><Accessories/></>
    }

]);
export default router;
 