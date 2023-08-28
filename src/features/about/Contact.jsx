import { Textarea, Typography, Input, Button, IconButton } from "@material-tailwind/react";
import { FaLocationDot, FaPhone, FaPaperPlane } from 'react-icons/fa6'
import { BiWorld } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';

import Footer from "../footer/Footer";
import NavigationMenu from "../home-page/NavigationMenu";

const ContactPage = () => {
  return (
    <>
      <NavigationMenu />
      <section className="contact-section flex flex-wrap items-center">
        <div className="flex flex-col items-center contact-form h-96 w-full max-w-screen-lg sm:w-96 ">
          <form className="mb-2 w-80 max-w-screen-lg sm:w-80">
            <div className="mb-4 flex flex-col gap-6">
              <Typography variant="h5" className="font-poppins font-bold">
                Leave a message
              </Typography>
              <Input variant="outlined" label="Email" type="email" />
              <Textarea color="blue" label="Message" />
            </div>
            <Button color="blue" className="contact-btn">Send</Button>
          </form>
        </div>
        <div className="flex flex-col contact-info">
          <ul className="flex flex-col gap-6 contact-elements">
            <Typography variant="lead" className="font-bold p-5 font-poppins" color="white">
              Contact us
            </Typography>
            <li className="flex items-center gap-6">
              <div>
                <IconButton className="rounded-full">
                  <FaLocationDot size={20} />
                </IconButton>
              </div>
              <div>
                <Typography variant="small" className="font-poppins font-bold">
                  Address
                </Typography>
                <Typography variant="small" className="font-poppins font-bold">
                  Suraj Plaza (4th Floor) Limuru Road, Nairobi Kenya
                </Typography>
              </div>
            </li>
            <li className="flex items-center gap-6">
              <div>
                <IconButton className="rounded-full">
                  <FaPhone size={20} />
                </IconButton>
              </div>
              <div>
                <Typography variant="small" className="font-poppins font-bold">
                  Phone
                </Typography>
                <Typography variant="small" className="font-poppins font-bold">
                  +254780269465
                </Typography>
              </div>
            </li>
            <li className="flex items-center gap-6">
              <div>
                <IconButton className="rounded-full">
                  <FaPaperPlane size={20} />
                </IconButton>
              </div>
              <div>
                <Typography variant="small" className="font-poppins font-bold">
                  Email
                </Typography>
                <Typography variant="small" className="font-poppins font-bold">
                  sales@milantours.com
                </Typography>
              </div>
            </li>
            <li className="flex items-center gap-6">
              <div>
                <IconButton className="rounded-full">
                  <BiWorld size={20} />
                </IconButton>
              </div>
              <div>
                <Typography variant="small" className="font-poppins font-bold">
                  Website
                </Typography>
                <Typography variant="small" className="font-poppins font-bold">
                  www.bushandbeach.com
                </Typography>
              </div>
            </li>
            <li className="flex items-center gap-6">
              <div>
                <IconButton className="rounded-full">
                  <BsMailbox size={20} />
                </IconButton>
              </div>
              <div>
                <Typography variant="small" className="font-poppins font-bold">
                  P.O Box
                </Typography>
                <Typography variant="small" className="font-poppins font-bold">
                  67833 - 00200 Nairobi, Kenya
                </Typography>
              </div>
            </li>
          </ul>
        </div>
      </section >
      <Footer />
    </>
  );
}
export default ContactPage;

