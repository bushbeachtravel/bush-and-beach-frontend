import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"

import { ThemeProvider } from '@material-tailwind/react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import router from './App';
import store from '@state-management/store';

import '@styling/index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ToastContainer />
    </Provider>

  </React.StrictMode>,
)
