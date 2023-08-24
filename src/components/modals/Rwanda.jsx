import { Button, Typography } from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa6";
import SafariDetail from "./Safari";
import Footer from "../Footer";
import { maraImages } from "../../data/safari";
import { rwandaUgandaItenary, rwandaUgandaPromoAd, rwandaUgandaExtras } from "../../data/itenaries";

const RwandaUganda = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="9 Days & 8 Nights"
      safariTitle="Ultimate Gorilla Adventure: Rwanda & Uganda Expedition "
      itenary={rwandaUgandaItenary}
      formData={rwandaUgandaPromoAd}
    />
    <section className="font-poppins rwanda flex flex-col items-center py-10 gap-6 w-full">
      <div className="rwanda-header flex flex-col items-center gap-6 py-10">
        <Typography variant="h3" className="font-poppins text-center px-10">
          Let your imagination and adventurous side run wild while offering you the below
        </Typography>
        <div className="rwanda-line-seperator"></div>
      </div>
      <div className="rwanda-bg">
        <div className="rwanda-container p-5 py-10">
          <div className="center ">
            {rwandaUgandaExtras.map((item, index) => (
              <div key={index} className="flex items-center gap-4 inner-container p-3">
                <div className="icon">
                  <FaCheck size={25} color="green" className="font-bold" />
                </div>
                <div className="w-full">
                  <Typography variant="h6" color="white" className="font-poppins">
                    {item}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="button p-10">
          <Button className="font-poppins" id="button">
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
    <Footer />
  </>
);
export default RwandaUganda;