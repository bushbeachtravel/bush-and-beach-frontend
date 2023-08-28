import { Typography } from "@material-tailwind/react"
import PropTypes from 'prop-types';

const AboutCoastalTours = ({ leadingHeader, bodyParagraph}) => (
  <section className="safari-header">
    <Typography className="font-poppins text-center p-10" id="safari-ad-text">
      {leadingHeader}
    </Typography>
    <Typography variant="paragraph" className="font-poppins p-10">
      {bodyParagraph}
    </Typography>
  </section>
);

AboutCoastalTours.propTypes = {
  leadingHeader: PropTypes.string.isRequired,
  bodyParagraph: PropTypes.string.isRequired,
}

export default AboutCoastalTours;
