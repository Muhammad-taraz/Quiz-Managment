import{createBrowserRouter} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"

const router = createBrowserRouter ([
    {
        path: "/",
        element:<HomePage/>
    },
    {
        path: "/HomePage",
        element:<HomePage/>
    },
    {
        path: "/Signup",
        element:<Signup/>
    },
    {
        path: "/Login",
        element:<Login/>
    }
])

export default router