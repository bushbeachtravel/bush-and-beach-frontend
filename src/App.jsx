import Homepage from './components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AirTicketing from './components/AirTicketing';
// import SafariPackage from './components/SafariPackage';
import HotelBooking from './components/HotelBooking';
import About from './components/about/About';
import NotFound from './components/NotFound';
import BlogPosts from './components/blog/Blog';
import BlogDetailView from './components/blog/BlogDetail';
import Gallery from './components/GalleryComponent';
import ContactPage from './components/Contact';
import CheckoutForm from './components/Payment';
import ServicesPage from './components/Services';
import KenyaSafaris from './components/kenya-safari/KenyaSafari';
import MasaaiMaraTrip from './components/kenya-safari/masaai-mara/MasaaiMara';
import LakeNakuruMaraTrip from './components/kenya-safari/lake-nakuru/LakeNakuruMara';
import NairobiSamburuMaraTrip from './components/kenya-safari/nrb-samburu-mara/NairobiSamburuMara';
import AmboseliTsavoWestTrip from './components/kenya-safari/amboseli-tsavo-west/AmboseliTsavoWest';
import NairobiAmboseliMaraTrip from './components/kenya-safari/nrb-amboseli-mara/NairobiAmboseliMara';
import NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip from './components/kenya-safari/nrb-amboseli-mara-mt-kenya/NrbAmboseliMaraMtKenya';
import NairobiAmboseliLewaMaraTrip from './components/kenya-safari/nrb-amboseli-lewa-mara/NairobiAmboseliLewaMara';
import KenyaCostalBeaches from './components/kenya-coast/CoastalBeaches';
import ZanzibarTours from './components/zanzibar/Zanzibar';
import RwandaUganda from './components/rwanda-uganda/Rwanda';
import InternationalTours from './components/international/InternationalTours';
import DubaiTrip from './components/dubai/DubaiTour';
import ChinaTrip from './components/china/ChinaTour';
import JohannesburgTrib from './components/joburg/JoburgTrip';
import MalaysiaTrip from './components/malaysia/MalaysiaTrip';
import MauritiusTrip from './components/mauritius/Mauritius';
import EgyptIsraelTrip from './components/egpyt-israel/EgyptIsrael';
import ParisBarcaItaly from './components/pari-barca-italy/PariBarcaItaly';
import BangkokTrip from './components/bangkok/Bangkok';
import TurkeyTrip from './components/turkey/Turkey';

const App = () => {

  return (
    <div>
      <BrowserRouter basename="/bush-and-beach-frontend">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="airtickets" element={<AirTicketing />} />
          <Route path="hotels" element={<HotelBooking />} />
          {/* <Route path="safari" element={<SafariPackage />} /> */}
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
          <Route path="international" element={<InternationalTours />} />
          <Route path="dubai" element={<DubaiTrip />} />
          <Route path="china" element={<ChinaTrip />} />
          <Route path="joburg" element={<JohannesburgTrib />} />
          <Route path="malaysia" element={<MalaysiaTrip />} />
          <Route path="mauritius" element={<MauritiusTrip />} />
          <Route path="egypt-israel" element={<EgyptIsraelTrip />} />
          <Route path="italy-barca-paris" element={<ParisBarcaItaly />} />
          <Route path="bangkok" element={<BangkokTrip />} />
          <Route path="turkey" element={<TurkeyTrip />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}
export default App;
