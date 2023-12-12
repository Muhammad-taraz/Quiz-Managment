import{createBrowserRouter} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import LandingPage from "../Pages/Landing-Page"
import Quiz from "../Pages/Quiz"
import ForgotPassword from "../Pages/ForgotPassword"
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
        path: "/ForgotPassword",
        element:<ForgotPassword/>
    },
    {
        path: "/LandingPage",
        element:<LandingPage/>
    },
    {
        path: "/Quiz",
        element:<Quiz/>
    },
   
    
    
])

export default router