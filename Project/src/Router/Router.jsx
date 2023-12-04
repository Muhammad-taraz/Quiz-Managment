import{createBrowserRouter} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import LandingPage from "../Pages/Landing-Page"


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
    },
    {
        path: "/LandingPage",
        element:<LandingPage/>
    },
    
    
])

export default router