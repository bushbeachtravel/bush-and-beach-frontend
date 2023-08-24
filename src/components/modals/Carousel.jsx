import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import { Typography } from "@material-tailwind/react";
import '../../assets/styles/Kenya.css';

const SafariCarousel = ({ images }) => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    cssEase: "linear"
  };
  return (
    <div className="p-8 big-five">
      <Typography className="font-poppins p-2" id="big-five-text">The Big Five</Typography>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="carousel-image-container h-full w-full p-1" key={index}>
            <img src={image} alt="" className="h-full w-full object-cover"/>
          </div>
        ))}
      </Slider>
    </div>
  );
}
SafariCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default SafariCarousel;