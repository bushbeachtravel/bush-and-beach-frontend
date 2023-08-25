import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import { Typography } from "@material-tailwind/react";
import '../../assets/styles/Kenya.css';

const SafariCarousel = ({ images, title }) => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    cssEase: "linear"
  };
  return (
    <div className="p-8 big-five">
      <Typography className="font-poppins p-2" id="big-five-text">
        {title}
      </Typography>
      <Slider {...settings} className="h-full w-full">
        {images.map((image, index) => (
          <div className="carousel-image-container p-1 h-full w-full" key={index}>
            <img src={image} alt="" className="w-full object-cover object-center carousel-images"/>
          </div>
        ))}
      </Slider>
    </div>
  );
}
SafariCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
}
export default SafariCarousel;