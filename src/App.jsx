import Homepage from './components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AirTicketing from './components/AirTicketing';
import SafariPackage from './components/SafariPackage';
import HotelBooking from './components/HotelBooking';
import About from './components/About';
import Conference from './components/Conference';
import NotFound from './components/NotFound';
import BlogPosts from './components/Blog';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="airtickets" element={<AirTicketing />} />
          <Route path="hotels" element={<HotelBooking />} />
          <Route path="safari" element={<SafariPackage />} />
          <Route path="conference" element={<Conference />} />
          <Route path="blog" element={<BlogPosts />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}
export default App;
