import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer theme='dark' autoClose={2500}/>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
)
