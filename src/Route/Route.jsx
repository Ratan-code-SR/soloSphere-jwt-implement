import Main from '../layout/Main.jsx';
import Home from '../pages/Home/Home/Home.jsx';
import {createBrowserRouter} from "react-router-dom";
import Login from '../pages/Login/Login.jsx';
import Register from '../pages/Register/Register.jsx';
import Error from '../pages/Error/Error.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        element: <Error/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/registration",
                element:<Register/>
            }
           
        ],
    },
]);

export default router;