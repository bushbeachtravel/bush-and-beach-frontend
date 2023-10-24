import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import { ThemeProvider } from '@material-tailwind/react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

// Homepage
import Homepage from "@home-page/Homepage";
import NotFound from "@home-page/NotFound";
import Trips from "@home-page/Trips";
import About from '@home-page/About';
import Gallery from '@home-page/GalleryComponent';
import ContactPage from '@home-page/Contact';
import UploadPhoto from '@home-page/UploadPhoto';

// Internation travel
import InternationalTours from '@international/InternationalTours';
import BangkokTrip from '@international/Bangkok';
import ChinaTrip from '@international/ChinaTour';
import DubaiTrip from '@international/DubaiTour';
import EgyptIsraelTrip from '@international/EgyptIsrael';
import JohannesburgTrib from '@international/JoburgTrip';
import MalaysiaTrip from '@international/MalaysiaTrip';
import MauritiusTrip from '@international/Mauritius';
import ParisBarcaItaly from '@international/PariBarcaItaly';
import RwandaUganda from '@international/Rwanda';
import TurkeyTrip from '@international/Turkey';

// Local Trips
import KenyaSafaris from '@local-trips/KenyaSafari';
import MasaaiMaraTrip from '@local-trips/MasaaiMara';
import LakeNakuruMaraTrip from '@local-trips/LakeNakuruMara';
import NairobiSamburuMaraTrip from '@local-trips/NairobiSamburuMara';
import AmboseliTsavoWestTrip from '@local-trips/AmboseliTsavoWest';
import NairobiAmboseliMaraTrip from '@local-trips/NairobiAmboseliMara';
import NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip from '@local-trips/NrbAmboseliMaraMtKenya';
import NairobiAmboseliLewaMaraTrip from '@local-trips/NairobiAmboseliLewaMara';
import FourDayKenyaSafari from '@local-trips/FourDaySafari';
import MasaaiMaraTsavo from '@local-trips/MasaaiMaraTsavo';
import Abderdares from '@local-trips/Aberdare';
import OlPajeta from '@local-trips/OlPajeta';
import NairobiTsavoEast from '@local-trips/NairobiTsavoEast';
import NairobiOlPajeta from '@local-trips/NairobiOlPajeta';
import BushAndBeachSafari from '@local-trips/BushAndBeachSafari';

// Blog
import BlogPage from '@blog/Blog';
import BlogDetail from '@blog/BlogDetail';
import BlogList from '@blog/BlogList';
import UpdateBlogPost from '@blog/BlogUpdate';

// Coastal beaches
import KenyaCostalBeaches from '@beach-holidays/CoastalBeaches';
import ZanzibarTours from '@beach-holidays/Zanzibar';

//Authentication
import AdminDashBoard from '@authentication/Admin';
import Signup from '@authentication/Signup';
import LoginForm from '@authentication/Login';

// Redux 
import store from '@state-management/store';

import '@styling/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFound />,
  },
    
  {
    path: "services",
    element: <Trips />,
  },
  {
    path: "international",
    element: <InternationalTours />, 
  },
  {
    path: "bangkok",
    element: <BangkokTrip />
  },
  {
    path: "china",
    element: <ChinaTrip />
  },
  {
    path: "dubai",
    element: <DubaiTrip />
  },
  {
    path: "egypt-israel",
    element: <EgyptIsraelTrip />
  },
  {
    path: "joburg",
    element: <JohannesburgTrib />
  },
  {
    path: "malaysia",
    element: <MalaysiaTrip />
  },
  {
    path: "mauritius",
    element: <MauritiusTrip />
  },
  {
    path: "italy-barca-paris",
    element: <ParisBarcaItaly />
  },
  {
    path: "rwanda-uganda",
    element: <RwandaUganda />
  },
  {
    path: "turkey",
    element: <TurkeyTrip />
  },
  {
    path: "kenya",
    element: <KenyaSafaris />
  },
  {
    path: "masai-mara",
    element: <MasaaiMaraTrip />
  },
  {
    path: "lake-nakuru-masai-mara",
    element: <LakeNakuruMaraTrip />
  },
  {
    path: "nairobi-samburu-masaai-mara",
    element: <NairobiSamburuMaraTrip />
  },
  {
    path: "amboseli-tsavo-west",
    element: <AmboseliTsavoWestTrip />
  },
  {
    path: "nairobi-amboseli-mara",
    element: <NairobiAmboseliMaraTrip />
  },
  {
    path: "nrb-amboseli-nakuru-mt-kenya-masaai-mara",
    element: <NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip />
  },
  {
    path: "nairobi-amboseli-lewa-mara",
    element: <NairobiAmboseliLewaMaraTrip />
  },
  {
    path: "four-days",
    element: <FourDayKenyaSafari />
  },
  {
    path: "kenya-safari",
    element: <MasaaiMaraTrip />
  },
  {
    path: "mara-lake-nakuru",
    element: <MasaaiMaraTsavo />
  },
  {
    path: "nakuru-aberdare",
    element: <Abderdares />
  },
  {
    path: "olpajeta",
    element: <OlPajeta />
  },
  {
    path: "giant-safari",
    element: <NairobiTsavoEast />
  },
  {
    path: "highlight-safari",
    element: <NairobiOlPajeta />
  },
  {
    path: "bush-beach-safari",
    element: <BushAndBeachSafari />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element: <ContactPage />
  },
  {
    path: "gallery",
    element: <Gallery />
  },
  {
    path: "blog",
    element: <BlogPage />
  },
  {
    path: "blog-detail/:id",
    element: <BlogDetail />
  },
  {
    path: "blog-update/:id",
    element: <UpdateBlogPost />
  },
  {
    path: "blog-list",
    element: <BlogList />
  },
  {
    path: "coast",
    element: <KenyaCostalBeaches />
  },
  {
    path: "zanzibar",
    element: <ZanzibarTours />
  },
  {
    path: "admin",
    element: <AdminDashBoard />
  },
  {
    path: "signup",
    element: <Signup />
  },
  {
    path: "login",
    element: <LoginForm />
  },
  {
    path: "photo-upload",
    element: <UploadPhoto />
  }
])
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
