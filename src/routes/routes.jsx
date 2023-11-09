import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import AddService from "../pages/AddService";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ManageServices from "../pages/ManageServices";
import MySchedules from "../pages/MySchedules";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";
import UpdateService from "../pages/UpdateService";
import PablicRoute from "./PablicRoute";
import PrivateRoute from "./PrivateRoute";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services /> ,
      },
      {
        path: "/add_service",
        element: <PrivateRoute><AddService /></PrivateRoute>  ,
      },
      {
        path: "/manage_Service",
        element:  <PrivateRoute><ManageServices /></PrivateRoute>
      },
      {
        path: "/my_schedules",
        element:  <PrivateRoute><MySchedules /></PrivateRoute>
      },
      {
        path: "/register",
        element:  <PablicRoute><Register /></PablicRoute> ,
      },
      {
        path: "/login",
        element:   <PablicRoute><Login /></PablicRoute>,
      },
      {
        path: "/service/:id",
        loader: ({params})=> fetch(`https://back-end-vercel-seven.vercel.app/service/${params.id}`),
        element:  <PrivateRoute><ServiceDetails /></PrivateRoute>,
      },
      {
        path: "/service_update/:id",
        loader: ({params})=> fetch(`https://back-end-vercel-seven.vercel.app/service_update/${params.id}`),
        element: <PrivateRoute><UpdateService /></PrivateRoute>,
      },
    ]
  },
]);

export default router;