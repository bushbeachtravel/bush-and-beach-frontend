import { useState } from 'react'
import accomodation from '../assets/accomodation.jpg'
import airpotTransfer from '../assets/airpotTransfer.jpg'
import airTravel from '../assets/airTravel.jpg'
import conference from '../assets/conference.jpg'
import safariPackage from '../assets/safariPackage.jpg'
import wild from '../assets/wild.jpg'

import '../assets/styles/HomePage.css';

const images = [
  accomodation, conference,
  airpotTransfer, airTravel,
  safariPackage, wild
]

export const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <button className='carousel-button prev' onClick={prevSlide}>
        Prev
      </button>
      <button className='carousel-button next' onClick={nextSlide}>
        Next
      </button>
      <div className='image-container'>
        <img className='carousel-img' src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
    </div>
  );
}
export default HomePage;