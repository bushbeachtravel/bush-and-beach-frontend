import { Typography, Button } from "@material-tailwind/react"
import PropTypes from 'prop-types';

const CoastContact = ({ contactSectionTitle, contactSectionBody, callToActionText }) => (
  <section className="talk-to-us">
    <div className="flex flex-col items-center gap-6 font-poppins p-20 py-20">
      <Typography variant="h4" className="font-poppins text-2xl">
        {contactSectionTitle}
      </Typography>
      <div className="rwanda-line-seperator"></div>
    </div>
    <div className="coast-background">
      <div className="coast-text-background w-2/3 p-5">
        <div className="w-full">
          <Typography color="white" variant="paragraph" className="font-poppins text-xl py-10">
            {contactSectionBody}
          </Typography>
        </div>
        <Typography variant="h3" color="white" className="font-poppins text-center py-5">
          {callToActionText}
        </Typography>
      </div>
      <div className="py-10">
        <Button className="font-poppins" id="button">
          Get In Touch
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