import { Typography, Button } from "@material-tailwind/react"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CoastContact = ({ contactSectionTitle, contactSectionBody, callToActionText }) => (
  <section className="talk-to-us">
    <div className="flex flex-col items-center justify-center gap-6 font-poppins p-10 py-20">
      <Typography variant="h5" className="font-poppins font-bold">
        {contactSectionTitle}
      </Typography>
      <div className="rwanda-line-seperator"></div>
    </div>
    <div className="coast-background">
      <div className="coast-text-background w-2/3 p-2">
        <div className="w-full">
          <Typography color="white" variant="paragraph" className="font-poppins text-xl py-5">
            {contactSectionBody}
          </Typography>
        </div>
        <Typography variant="h5" color="white" className="font-poppins text-center py-3 font-bold">
          {callToActionText}
        </Typography>
      </div>
      <div className="py-10">
        <Button className="font-poppins" id="button">
          <Link to="/contact">
            Get In Touch
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

CoastContact.propTypes = {
  contactSectionTitle: PropTypes.string.isRequired,
  contactSectionBody: PropTypes.string.isRequired,
  callToActionText: PropTypes.string.isRequired,
}
export default CoastContact;