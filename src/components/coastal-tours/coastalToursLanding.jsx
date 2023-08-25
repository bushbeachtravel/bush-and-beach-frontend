import { Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const CoastalLandingPage = ({backgroundImage, pageTitle}) => (
  <figure className="relative h-full w-full">
    <img
      className="h-full w-full object-cover object-center"
      src={backgroundImage}
      alt="nature image"
    />
    <figcaption className="absolute inset-0 flex flex-col justify-center items-center text-center">
      <div>
        <Typography color="white" className="font-poppins" id="lead-text">
          {pageTitle}
        </Typography>
      </div>
    </figcaption>
  </figure>
);

CoastalLandingPage.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default CoastalLandingPage;