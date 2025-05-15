import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Wish from "../pages/wish/Wish";
import Admin from "../dashboard/Admin";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
children: [
    {
        path: "",
        element: <Home />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/wish",
        element: <Wish />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
]
    }
   
]);

export default router