import {
  createBrowserRouter
} from "react-router-dom";
import App from "../Root";
import AddService from "../pages/AddService";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ManageServices from "../pages/ManageServices";
import MySchedules from "../pages/MySchedules";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";
import UpdateService from "../pages/UpdateService";
import PrivateRoute from "./PrivateRoute";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
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
        element: <AddService /> ,
      },
      {
        path: "/manage_Service",
        element: <ManageServices />,
      },
      {
        path: "/my_schedules",
        element: <MySchedules />,
      },
      {
        path: "/register",
        element: <Register /> ,
      },
      {
        path: "/login",
        element:  <Login />,
      },
      {
        path: "/service_detail/:id",
        // loader: ({params})=> fetch(`https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/products/${params.id}`),
        element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
      },
      {
        path: "/products/update/:id",
        // loader: ({params})=> fetch(`https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/products/${params.id}`),
        element: <UpdateService />,
      },
    ]
  },
]);

export default router;