import { Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import SafariCarousel from "@utils/Carousel";

const SafariIntroSection = ({
  pageTitle, pageBodyLeft, pageBodyRight, 
  images, title2, bodyTextwo, title
}) => (
  <>
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
      <SafariCarousel images={images} title={title} />
    </section>
    <section className="safari-header">
      <Typography className="font-poppins text-center p-10" id="safari-ad-text">
        {title2}
      </Typography>
      <Typography variant="paragraph" className="font-poppins p-10">
        {bodyTextwo}
      </Typography>
    </section>
  </>
);

SafariIntroSection.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageBodyLeft: PropTypes.string.isRequired,
  pageBodyRight: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  bodyTextwo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
export default SafariIntroSection;
