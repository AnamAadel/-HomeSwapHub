import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './context/AuthContext.jsx';
import './index.css';
import router from './routes/routes.jsx';
import('preline');

import "react-toastify/dist/ReactToastify.css";
// ..
AOS.init();
axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
