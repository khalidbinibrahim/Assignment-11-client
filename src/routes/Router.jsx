import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage"
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import NeedVolunteerPage from "../pages/NeedVolunteerPage/NeedVolunteerPage"
import MyProfile from "../pages/MyProfile/MyProfile"
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost"
import ManageMyPost from "../pages/ManageMyPost/ManageMyPost"
import MyVolunteerRequestedPage from "../pages/MyVolunteerRequestedPage/MyVolunteerRequestedPage"
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/login',
                element: <Login />
            },

            {
                path: '/create_account',
                element: <CreateAccount />
            },

            {
                path: '/need_volunteer_page',
                element: <NeedVolunteerPage />
            },

            {
                path: '/my_profile',
                element: <PrivateRoute><MyProfile /></PrivateRoute>
            },

            {
                path: '/add_volunteer_post',
                element: <PrivateRoute><AddVolunteerPost /></PrivateRoute>
            },

            {
                path: '/manage_my_post',
                element: <PrivateRoute><ManageMyPost /></PrivateRoute>
            },

            {
                path: '/my_volunteer_requested_post',
                element: <PrivateRoute><MyVolunteerRequestedPage /></PrivateRoute>
            }
        ]
    }    
]);

export default router;