import { createBrowserRouter } from "react-router-dom";
import Home from "./Navbar/Home.jsx";
import Link from "./Navbar/Link.jsx";
import Product from "./Navbar/Product.jsx";
import Contact from "./Navbar/Contact.jsx";
import Accessories from "./Navbar/Accessories.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <><Home /></>,
    },
    {
        path:"/Link",
        element:<><Link/></>
    },
    {
        path:"/Product",
        element:<><Product/></>
    },
    {
        path:"/Contact",
        element:<><Contact/></>
    },
    {
        path:"/Accessories",
        element:<><Accessories/></>
    }

]);
export default router;
 