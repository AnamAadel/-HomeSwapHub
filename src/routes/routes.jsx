import {
  createBrowserRouter
} from "react-router-dom";
import App from "../Root";
import AddService from "../pages/AddService";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ManageServices from "../pages/ManageServices";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";
import UpdateService from "../pages/UpdateService";


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
        
        path: "/services/:id hg",
        element: <ServiceDetails />,
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
        path: "/services/:id",
        // loader: ({params})=> fetch(`https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/products/${params.id}`),
        element: <ServiceDetails />,
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