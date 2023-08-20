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
    <div className="p-10 big-five">
      <Typography variant="h3" className="font-poppins p-2">The Big Five</Typography>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="carousel-image-container h-full p-1" key={index}>
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
//  <Card className="w-96 gap-2" key={index}></Card>
{/* <CardHeader shadow={false} floated={false} className="h-96">
              <img
                src={image}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">
                  Apple AirPods
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  $95.00
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                With plenty of talk and listen time, voice-activated Siri access, and
                an available wireless charging case.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card> */}