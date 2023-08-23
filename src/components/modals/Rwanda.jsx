import { Typography } from "@material-tailwind/react";
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
    <hr />
    <section className="font-poppins rwanda flex flex-col items-center p-3 py-10 gap-6">
      <Typography variant="h6" className="font-poppins w-96 text-center ">
        Let your imagination and adventurous side run wild while offering you the below
      </Typography>
      <div className="rwanda-line-seperator"></div>
      <div className="rwanda-container w-96 p-5 py-10">
        <div className="center">
          {rwandaUgandaExtras.map((item, index) => (
            <div key={index} className="flex items-center gap-4 inner-container p-3">
              <div className="icon">
                <FaCheck size={25} color="green" className="font-bold" />
              </div>
              <div className="w-full">
                <Typography variant="paragraph" className="font-poppins">
                  {item}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);
export default RwandaUganda;