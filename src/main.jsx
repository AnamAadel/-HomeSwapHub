import React from 'react'
import 'react-awesome-button/dist/styles.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AuthProvider from './context/AuthContext.jsx'
import './index.css'
import('preline')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <App />

  </AuthProvider>
  </React.StrictMode>,
)
