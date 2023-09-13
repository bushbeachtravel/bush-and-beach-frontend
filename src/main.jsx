import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@material-tailwind/react'
import { ToastContainer } from 'react-toastify'

import './index.css'
import App from './App'
import store from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <ToastContainer />
    </Provider>

  </React.StrictMode>,
)
