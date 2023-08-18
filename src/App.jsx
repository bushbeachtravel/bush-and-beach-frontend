import Homepage from './components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AirTicketing from './components/AirTicketing';
import SafariPackage from './components/SafariPackage';
import HotelBooking from './components/HotelBooking';
import About from './components/About';
import Conference from './components/Conference';
import NotFound from './components/NotFound';
import BlogPosts from './components/Blog';
import BlogDetailView from './components/BlogDetail';
import Gallery from './components/GalleryComponent';
import ContactPage from './components/Contact';
import CheckoutForm from './components/Payment';
import ServicesPage from './components/Services';

const App = () => {

  return (
    <div>
      <BrowserRouter basename="/bush-and-beach-frontend">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="airtickets" element={<AirTicketing />} />
          <Route path="hotels" element={<HotelBooking />} />
          <Route path="safari" element={<SafariPackage />} />
          <Route path="conference" element={<Conference />} />
          <Route path="blog" element={<BlogPosts />} />
          <Route path="detail" element={<BlogDetailView />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="payment" element={<CheckoutForm />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}
export default App;
