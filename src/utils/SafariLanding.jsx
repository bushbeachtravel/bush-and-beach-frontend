import { Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const SafariLandingPage = ({ backgroundImage, title}) => (
  <figure className="relative h-screen w-full" id="landing-bg-img">
    <img
      className="h-full w-full object-cover object-center"
      src={backgroundImage}
      alt="nature image"
    />
    <figcaption className="absolute inset-0 flex flex-col justify-center items-center text-center">
      <div>
        <Typography color="white" className="font-poppins" variant="h3">
          {title}
        </Typography>
      </div>
    </figcaption>
  </figure>
);
SafariLandingPage.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
export default SafariLandingPage;
