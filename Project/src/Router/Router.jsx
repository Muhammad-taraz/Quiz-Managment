import{createBrowserRouter} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import LandingPage from "../Pages/Landing-Page"
import Quiz from "../Pages/Quiz"
import EngQuestions from "../Pages/EngQuestions"
import MathsQuestions from "../Pages/MathsQuestions"
import GKQuestions from "../Pages/GKQuestions"
import CompQuestions from "../Pages/CompQuestions"
import IslamiatQuestions from "../Pages/IslamiatQuestions"

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
    {
        path: "/Quiz",
        element:<Quiz/>
    },
    {
        path: "/EngQuestions",
        element:<EngQuestions/>
    },
    {
        path: "/MathsQuestions",
        element:<MathsQuestions/>
    },
    {
        path: "/IslamiatQuestions",
        element:<IslamiatQuestions/>
    },
    {
        path: "/GKQuestions",
        element:<GKQuestions/>
    },
    {
        path: "/CompQuestions",
        element:<CompQuestions/>
    },
    
    
])

export default router