import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React from 'react';
import 'react-awesome-button/dist/styles.css';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './context/AuthContext.jsx';
import './index.css';
import router from './routes/routes.jsx';
import('preline');
// ..
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
