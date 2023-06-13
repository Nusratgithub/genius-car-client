import Main from "../Layout/Main"
import About from "../Pages/About/About"
import Checkout from "../Pages/Checkout/Checkout"
import Contact from "../Pages/Contact/Contact"
import Order from "../Pages/HomePage/Order/Order"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home/Home"
import Login from "../Pages/HomePage/Login/Login"
import Register from "../Pages/Register/Register"
import Services from "../Pages/Services/Services"
import ServiceDetail from "../Pages/Shared/ServiceDetails/ServiceDetail/ServiceDetail"
import PrivateRoute from "./PrivateRoute"
import Payment from "../Pages/Payment/payment"

const { createBrowserRouter } = require("react-router-dom")

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/service-details/:serviceId',
                element: <ServiceDetail />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/checkout/:serviceId',
                element: <PrivateRoute>
                    <Checkout /> 
                </PrivateRoute>  
            },
            {
                path: '/orders',
                element: (
                    <PrivateRoute>
                        <Order />
                    </PrivateRoute>
                )
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://genius-car-server-nu-ten.vercel.app/orders/${params.id}`)
            }
        ]
    },
    
        
    
])