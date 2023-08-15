import { Textarea, Typography, Input, Button, IconButton } from "@material-tailwind/react";
import { FaLocationDot, FaPhone, FaPaperPlane } from 'react-icons/fa6'
import { BiWorld } from 'react-icons/bi'
const ContactPage = () => {
  return (
    <section className="contact-section flex flex-wrap">
      <div className="flex flex-col gap-6 contact-form">
        <Typography variant="h5" className="font-poppins font-bold">
          Leave a message
        </Typography>
        <Input variant="outlined" label="Email" type="email" />
        <Textarea color="blue" label="Message" />
        <Button color="blue" className="contact-btn">Send</Button>
      </div>
      <div className="flex flex-col contact-info">
        <ul className="flex flex-col gap-6 contact-elements">
          <Typography variant="lead" className="font-bold p-5 font-poppins" color="white">
            Contact us
          </Typography>
          <li className="flex items-center gap-6">
            <IconButton className="rounded-full">
              <FaLocationDot size={20} />
            </IconButton>
            Address
          </li>
          <li className="flex items-center gap-6">
            <IconButton className="rounded-full">
              <FaPhone size={20} />
            </IconButton>
            Phone
          </li>
          <li className="flex items-center gap-6">
            <IconButton className="rounded-full">
              <FaPaperPlane size={20} />
            </IconButton>
            Email
          </li>
          <li className="flex items-center gap-6">
            <IconButton className="rounded-full">
              <BiWorld size={20} />
            </IconButton>
            Website
          </li>
        </ul>
      </div>
    </section>
  );
}
export default ContactPage;
