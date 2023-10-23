// import { 
//   BrowserRouter, Route, Routes,
//   createBrowserRouter, RouterProvider
//  } from 'react-router-dom';

// import "react-toastify/dist/ReactToastify.css";

// // Home page route
// import Homepage from '@features/Homepage';

// // About us route
// import About from '@features/About';

// // 404 page
// import NotFound from '@features/NotFound';

// // Contact page
// import ContactPage from '@features/Contact';

// // Gallery
// import UploadPhoto from '@features/gallery/UploadPhoto';
// import Gallery from '@features/gallery/GalleryComponent';

// // Servics routes 
// import Trips from '@features/Trips';

// // Local safari routes
// import KenyaSafaris from '@features/KenyaSafari';
// import MasaaiMaraTrip from '@features/MasaaiMara';
// import LakeNakuruMaraTrip from '@features/LakeNakuruMara';
// import NairobiSamburuMaraTrip from '@features/NairobiSamburuMara';
// import AmboseliTsavoWestTrip from '@features/AmboseliTsavoWest';
// import NairobiAmboseliMaraTrip from '@features/NairobiAmboseliMara';
// import NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip from '@features/NrbAmboseliMaraMtKenya';
// import NairobiAmboseliLewaMaraTrip from '@features/NairobiAmboseliLewaMara';
// import FourDayKenyaSafari from '@features/FourDaySafari';
// import MasaaiMaraTsavo from '@features/MasaaiMaraTsavo';
// import Abderdares from '@features/Aberdare';
// import OlPajeta from '@features/OlPajeta';
// import NairobiTsavoEast from '@features/NairobiTsavoEast';
// import NairobiOlPajeta from '@features/NairobiOlPajeta';
// import BushAndBeachSafari from '@features/BushAndBeachSafari';

// // Coastal Trips
// import KenyaCostalBeaches from '@features/CoastalBeaches';
// import ZanzibarTours from '@features/Zanzibar';

// // International trips routes
// import RwandaUganda from '@features/Rwanda';
// import InternationalTours from '@features/InternationalTours';
// import DubaiTrip from '@features/DubaiTour';
// import ChinaTrip from '@features/ChinaTour';
// import JohannesburgTrib from '@features/JoburgTrip';
// import MalaysiaTrip from '@features/MalaysiaTrip';
// import MauritiusTrip from '@features/Mauritius';
// import EgyptIsraelTrip from '@features/EgyptIsrael';
// import ParisBarcaItaly from '@features/PariBarcaItaly';
// import BangkokTrip from '@features/Bangkok';
// import TurkeyTrip from '@features/Turkey';

// //
// import AdminDashBoard from '@features/Admin';
// import Login from '@features/Login';
// import Logout from '@features/Logout';
// import Signup from '@features/Signup';

// // Blog routes 
// import BlogDetail from '@features/BlogDetail';
// import UpdateBlogPost from '@features/BlogUpdate';
// import BlogList from '@features/BlogList';
// import BlogPage from '@features/Blog';

// import "@styling/index.css"


// const App = () => {

//   return (
//     <div>
//       <BrowserRouter>
//         <Logout />
//         <Routes>
//           <Route path="/" element={<Homepage />} />

//           <Route path="/admin" element={<AdminDashBoard />} />
//           <Route path="/login" element={<Login />} /> 
//           <Route path="/signup" element={<Signup />} />

//           <Route path="/about" element={<About />} />

//           <Route path="/blog-detail/:id" element={<BlogDetail />} />
//           <Route path="/blog" element={<BlogPage />} />
//           <Route path="/blog-list" element={<BlogList />} />
//           <Route path="/blog-update/:id" element={<UpdateBlogPost />} />

//           <Route path='/photo-upload' element={<UploadPhoto />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/services" element={<Trips />} />
//           <Route path="/kenya" element={<KenyaSafaris />} />
//           <Route path="/coast" element={<KenyaCostalBeaches />} />
//           <Route path="/masai-mara" element={<MasaaiMaraTrip />} />
//           <Route path="/lake-nakuru-masai-mara" element={<LakeNakuruMaraTrip /> } />
//           <Route path="/nairobi-samburu-masaai-mara" element={<NairobiSamburuMaraTrip />} />
//           <Route path="/amboseli-tsavo-west" element={<AmboseliTsavoWestTrip />} />
//           <Route path="/nairobi-amboseli-mara" element={<NairobiAmboseliMaraTrip />} />
//           <Route path="/nrb-amboseli-nakuru-mt-kenya-masaai-mara" element={<NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip />} />
//           <Route path="/nairobi-amboseli-lewa-mara" element={<NairobiAmboseliLewaMaraTrip />} />
//           <Route path="/kenya-safari" element={<FourDayKenyaSafari />} />
//           <Route path="/mara-lake-nakuru" element={<MasaaiMaraTsavo />} />
//           <Route path="/nakuru-aberdare" element={<Abderdares />} />
//           <Route path="/olpajeta" element={<OlPajeta />} />
//           <Route path="/giant-safari" element={<NairobiTsavoEast />} />
//           <Route path="/highlight-safari" element={<NairobiOlPajeta />} />
//           <Route path="/bush-beach-safari" element={<BushAndBeachSafari />} />

//           <Route path="/zanzibar" element={<ZanzibarTours />} />
//           <Route path="/rwanda-uganda" element={<RwandaUganda />} />
//           <Route path="/international" element={<InternationalTours />} />
//           <Route path="/dubai" element={<DubaiTrip />} />
//           <Route path="/china" element={<ChinaTrip />} />
//           <Route path="/joburg" element={<JohannesburgTrib />} />
//           <Route path="/malaysia" element={<MalaysiaTrip />} />
//           <Route path="/mauritius" element={<MauritiusTrip />} />
//           <Route path="/egypt-israel" element={<EgyptIsraelTrip />} />
//           <Route path="/italy-barca-paris" element={<ParisBarcaItaly />} />
//           <Route path="/bangkok" element={<BangkokTrip />} />
//           <Route path="/turkey" element={<TurkeyTrip />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>

//     </div>

//   );
// }
// export default App;
