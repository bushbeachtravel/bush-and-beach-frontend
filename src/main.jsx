import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { ThemeProvider } from '@material-tailwind/react'
import HomePage from './components/Homepage';
import Services from './components/Services';
import NotFound from './components/NotFound';
import HotelBooking from './components/HotelBooking';
import About from './components/About';
import BlogPosts from './components/Blog';
import BlogDetailView from './components/BlogDetail';
import Gallery from './components/GalleryComponent';
import ContactPage from './components/Contact';
import CheckoutForm from './components/Payment';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "hotels",
    element: <HotelBooking />,
  },
  {
    path: "payment",
    element: <CheckoutForm />
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "blog",
    element: <BlogPosts />,
  },
  {
    path: "detail",
    element: <BlogDetailView />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "about",
    element: <About />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
