import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Typography, IconButton } from "@material-tailwind/react";
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { FaLocationDot, FaPhone, FaPaperPlane } from 'react-icons/fa6'
import { BiWorld } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';
import { contactUsMessageAsync } from "../../app/messagesSlice";
import Footer from "../footer/Footer";
import NavigationMenu from "../home-page/NavigationMenu";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const sendMessageToFormSpree = (data) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('message', data.message);
    dispatch(contactUsMessageAsync(formData))
    reset();
  }

  return (
    <>
      <NavigationMenu />
      <section className="contact-section flex flex-wrap mb-20">
        <div className="flex flex-col contact-form w-full max-w-screen-lg sm:w-96 ">
          <Typography variant="h5" className="font-poppins font-bold">
            Leave a message
          </Typography>
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleSubmit(sendMessageToFormSpree)}
          >
            <div className="mb-4 flex flex-col gap-6">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email"
                    value="Your email"
                  />
                </div>
                <TextInput
                  id="email"
                  placeholder="johndoe@gmail.com"
                  required
                  type="email"
                  name="email"
                  {...register('email')}
                />
              </div>
              <div
                className="max-w-md"
                id="textarea"
              >
                <div className="mb-2 block">
                  <Label
                    htmlFor="message"
                    value="Your message"
                  />
                </div>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  required
                  rows={4}
                  className="w-full"
                  name="message"
                  {...register('message')}
                />
              </div>
            </div>
            <Button
              color="blue"
              className="contact-btn"
              type="submit"
            >
              Send
            </Button>
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
                  <Link to="mailto:sales@milantours.com">sales@milantours.com</Link>
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
                  <Link to="https://kennankole.me/bush-and-beach-frontend/" target="_blank">bushandbeach.com</Link>

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

