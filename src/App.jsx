import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

import Homepage from './features/home-page/Homepage';
import Trips from './features/home-page/Trips';
import About from './features/about/About';
import NotFound from './features/error-page/NotFound';
import BlogPosts from './features/blog/Blog';
import BlogDetailView from './features/blog/BlogDetail';
import Gallery from './features/gallery/GalleryComponent';
import ContactPage from './features/about/Contact';
import CheckoutForm from './features/checkout/Payment';
import BlogPage from './features/authentication/Blog';

import KenyaSafaris from './features/local-trips/KenyaSafari';
import MasaaiMaraTrip from './features/local-trips/masaai-mara/MasaaiMara';
import LakeNakuruMaraTrip from './features/local-trips/lake-nakuru/LakeNakuruMara';
import NairobiSamburuMaraTrip from './features/local-trips/nrb-samburu-mara/NairobiSamburuMara';
import AmboseliTsavoWestTrip from './features/local-trips/amboseli-tsavo-west/AmboseliTsavoWest';
import NairobiAmboseliMaraTrip from './features/local-trips/nrb-amboseli-mara/NairobiAmboseliMara';
import NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip from './features/local-trips/nrb-amboseli-mara-mt-kenya/NrbAmboseliMaraMtKenya';
import NairobiAmboseliLewaMaraTrip from './features/local-trips/nrb-amboseli-lewa-mara/NairobiAmboseliLewaMara';
import FourDayKenyaSafari from './features/local-trips/four-day-safari/FourDaySafari';

import KenyaCostalBeaches from './features/beach-holidays/kenya/CoastalBeaches';
import ZanzibarTours from './features/beach-holidays/zanzibar/Zanzibar';


import RwandaUganda from './features/international-trips/rwanda-uganda/Rwanda';
import InternationalTours from './features/international-trips/InternationalTours';
import DubaiTrip from './features/international-trips/dubai/DubaiTour';
import ChinaTrip from './features/international-trips/china/ChinaTour';
import JohannesburgTrib from './features/international-trips/joburg/JoburgTrip';
import MalaysiaTrip from './features/international-trips/malaysia/MalaysiaTrip';
import MauritiusTrip from './features/international-trips/mauritius/Mauritius';
import EgyptIsraelTrip from './features/international-trips/egpyt-israel/EgyptIsrael';
import ParisBarcaItaly from './features/international-trips/pari-barca-italy/PariBarcaItaly';
import BangkokTrip from './features/international-trips/bangkok/Bangkok';
import TurkeyTrip from './features/international-trips/turkey/Turkey';

import AdminDashBoard from './features/authentication/Admin';
import Login from './features/authentication/Login';
import Logout from './features/authentication/Logout';
import Signup from './features/authentication/Signup';
import BlogDetail from './features/authentication/BlogDetail';
import UpdateBlogPost from './features/authentication/BlogUpdate';
import BlogList from './features/authentication/BlogList';

import UploadPhoto from './features/gallery/UploadPhoto';

import './assets/styles/Kenya.css';
import './assets/styles/Blog.css';
import './assets/styles/HomePage.css';

const App = () => {

  return (
    <div>
      <BrowserRouter basename="/bush-and-beach-frontend">
        <Logout />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="admin" element={<AdminDashBoard />} />
          <Route path="login" element={<Login />} /> 
          <Route path="signup" element={<Signup />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="/blog-detail/:id" element={<BlogDetail />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="/blog-update/:id" element={<UpdateBlogPost />} />
          <Route path='/photo-upload' element={<UploadPhoto />} />
          <Route path="about" element={<About />} />
          <Route path="trips" element={<Trips />} />
          <Route path="blog" element={<BlogPosts />} />
          <Route path="detail" element={<BlogDetailView />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContactPage />} />

          <Route path="payment" element={<CheckoutForm />} />

          <Route path="kenya" element={<KenyaSafaris />} />
          <Route path="coast" element={<KenyaCostalBeaches />} />
          <Route path="masai-mara" element={<MasaaiMaraTrip />} />
          <Route path="lake-nakuru-masai-mara" element={<LakeNakuruMaraTrip /> } />
          <Route path="nairobi-samburu-masaai-mara" element={<NairobiSamburuMaraTrip />} />
          <Route path="amboseli-tsavo-west" element={<AmboseliTsavoWestTrip />} />
          <Route path="nairobi-amboseli-mara" element={<NairobiAmboseliMaraTrip />} />
          <Route path="nrb-amboseli-nakuru-mt-kenya-masaai-mara" element={<NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip />} />
          <Route path="nairobi-amboseli-lewa-mara" element={<NairobiAmboseliLewaMaraTrip />} />
          <Route path="kenya-safari" element={<FourDayKenyaSafari />} />
          
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
