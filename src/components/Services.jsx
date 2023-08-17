import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import NavigationMenu from "./NavigationMenu";
import '../assets/styles/Blog.css';


const ServicesPage = () => {

  const data = [
    {
      label: "Travel Advisory",
      value: "advisory",
      desc: `At Bush and Beach, we pride ourselves with the most knowledgable, 
      reliable, friendly and experiences consultants.We listen, 
      evaluate and undertand the needs of our clients and advice 
      with the best of our knowledge to meet all our customer’s 
      expectations and requirements.`,
    },

    {
      label: "Airport Transfer",
      value: "transfer",
      desc: `Landing in a new airport at any time and finding your way 
      to the expected destination can be challenging and hectic. 
      We at Bush and Beach have partnered with different travel 
      agents across the globe to facilitate smooth and reliable 
      transfers from the airport to the hotels.`,
    },

    {
      label: "Visa Processing",
      value: "visa",
      desc: `At times planning for a trip and getting all the necessary 
      documents as well as meeting the legal requirements for 
      different countries can be tasking and time consuming.
      This is why we have setup within our company a team of experts 
      to handle Visa processing for all our clients.
      Over time, we have established a working close relationship 
      within various embassies across the country. 
      This ensures that our clients Visas have met all requirements 
      within the shortest time possible once the client has met all 
      the requirements as per the country of visit regulations.`,
    },
  ];

  return (
    <>
      <NavigationMenu />
      <section className="services-page">
        <div className="services-background"></div>
        <div className="services">
          <Tabs id="custom-animation" value="html" className="services-tab font-poppins px-3 m-2">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  <Typography variant="lead" className="font-poppins font-bold">
                    {label}
                  </Typography>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
              className="font-poppins tabs-body"
            >
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  <Typography className="font-poppins p-3">
                    {desc}
                  </Typography>
                  <br />
                  <div className="px-3">
                    <Button type="submit" className="font-poppins">
                      <Link to="/contact">Get In Touch</Link>
                    </Button>
                  </div>

                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </section><Footer /></>
  );
}
export default ServicesPage;
