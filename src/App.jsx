import { createBrowserRouter } from "react-router-dom"

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


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/hotels",
        element: <HotelBooking />,
      },
      {
        path: "/payment",
        element: <CheckoutForm />
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <BlogPosts />,
      },
      {
        path: "/detail",
        element: <BlogDetailView />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ]
  },
  
]);
export default router;