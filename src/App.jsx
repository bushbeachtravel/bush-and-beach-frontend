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
import KenyaSafaris from './components/modals/KenyaSafari'
import MasaaiMaraTrip from './components/modals/MasaaiMara';
import LakeNakuruMaraTrip from './components/modals/LakeNakuruMara';
import NairobiSamburuMaraTrip from './components/modals/NairobiSamburuMara';
import AmboseliTsavoWestTrip from './components/modals/AmboseliTsavoWest';
import NairobiAmboseliMaraTrip from './components/modals/NairobiAmboseliMara';
import NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip from './components/modals/NrbAmboseliMaraMtKenya';
import NairobiAmboseliLewaMaraTrip from './components/modals/NairobiAmboseliLewaMara';
import KenyaCostalBeaches from './components/modals/CoastalBeaches';
import ZanzibarTours from './components/modals/Zanzibar';
import RwandaUganda from './components/modals/Rwanda';

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
          <Route path="kenya" element={<KenyaSafaris />} />
          <Route path="coast" element={<KenyaCostalBeaches />} />
          <Route path="masai-mara" element={<MasaaiMaraTrip />} />
          <Route path="lake-nakuru-masai-mara" element={<LakeNakuruMaraTrip /> } />
          <Route path="nairobi-samburu-masaai-mara" element={<NairobiSamburuMaraTrip />} />
          <Route path="amboseli-tsavo-west" element={<AmboseliTsavoWestTrip />} />
          <Route path="nairobi-amboseli-mara" element={<NairobiAmboseliMaraTrip />} />
          <Route path="nrb-amboseli-nakuru-mt-kenya-masaai-mara" element={<NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip />} />
          <Route path="nairobi-amboseli-lewa-mara" element={<NairobiAmboseliLewaMaraTrip />} />
          <Route path="zanzibar" element={<ZanzibarTours />} />
          <Route path="rwanda-uganda" element={<RwandaUganda />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}
export default App;
