import { Typography } from "@material-tailwind/react"
import PropTypes from 'prop-types';
import SafariCarousel from "../modals/Carousel"

const CoastalToursDescription = ({pageTitle, pageBodyRight, pageBodyLeft, carouselImages}) => (
  <section className="safari-section w-full">
    <div className="flex flex-col items-center">
      <Typography variant="h4" className="font-poppins p-7">
        {pageTitle}
      </Typography>
      <div className="line-seperator"></div>
    </div>
    <div className="flex justify-evenly flex-wrap w-full py-5">
      <div className="left-para p-5">
        <Typography variant="paragraph" className=" p-3 font-poppins">
          {pageBodyLeft}
        </Typography>
      </div>
      <div className="right-para p-5">
        <Typography variant="paragraph" className=" p-3 font-poppins">
          {pageBodyRight}
        </Typography>
      </div>
    </div>
    <SafariCarousel images={carouselImages} />
  </section>
);

CoastalToursDescription.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageBodyLeft: PropTypes.string.isRequired,
  pageBodyRight: PropTypes.string.isRequired,
  carouselImages: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default CoastalToursDescription;