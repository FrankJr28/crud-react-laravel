import { createBrowserRouter } from "react-router-dom"
import Login from "./views/Login.jsx"
import Signup from "./views/SignUp.jsx"
import Users from "./views/Users.jsx"
import NotFound from "./views/NotFound.jsx"
import DefaultLayout from "./components/DefaultLayout.jsx"
import GuestLayout from "./components/GuestLayout.jsx"
import Dashboard from "./views/Dashboard.jsx"
import { Navigate } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [     
            {
                path: '/',
                element: <Navigate to="/users"/>
            },   
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/users',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [        
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
    
])

export default router;