import { Typography } from "@material-tailwind/react"
import PropTypes from 'prop-types';

const AboutCoastalTours = ({ leadingHeader, bodyParagraph}) => (
  <section className="safari-header">
    <Typography variant="h5" className="font-poppins text-center p-5 mt-20" >
      {leadingHeader}
    </Typography>
    <Typography variant="paragraph" className="font-poppins p-5">
      {bodyParagraph}
    </Typography>
  </section>
);

AboutCoastalTours.propTypes = {
  leadingHeader: PropTypes.string.isRequired,
  bodyParagraph: PropTypes.string.isRequired,
}

export default AboutCoastalTours;
