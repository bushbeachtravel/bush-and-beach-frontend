import { Typography, IconButton } from "@material-tailwind/react";
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { FaLocationDot, FaPhone, FaPaperPlane } from 'react-icons/fa6'
import { BiWorld } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';

import Footer from "../footer/Footer";
import NavigationMenu from "../home-page/NavigationMenu";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <>
      <NavigationMenu />
      <section className="contact-section flex flex-wrap mb-20">
        <div className="flex flex-col contact-form w-full max-w-screen-lg sm:w-96 ">
          <Typography variant="h5" className="font-poppins font-bold">
            Leave a message
          </Typography>
          <form className="flex max-w-md flex-col gap-4">
            <div className="mb-4 flex flex-col gap-6">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email1"
                    value="Your email"
                  />
                </div>
                <TextInput
                  id="email1"
                  placeholder="johndoe@gmail.com"
                  required
                  type="email"
                />
              </div>
              <div
                className="max-w-md"
                id="textarea"
              >
                <div className="mb-2 block">
                  <Label
                    htmlFor="comment"
                    value="Your message"
                  />
                </div>
                <Textarea
                  id="comment"
                  placeholder="Write your message here..."
                  required
                  rows={4}
                  className="w-full"
                />
              </div>
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
                  <Link to="www.bushandbeach.com">www.bushandbeach.com</Link>
                  
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
      </section>
      <Footer />
    </>
  );
}
export default ContactPage;

