import React from 'react'
import 'react-awesome-button/dist/styles.css'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom"
import AuthProvider from './context/AuthContext.jsx'
import './index.css'
import router from './routes/routes.jsx'
import('preline')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
