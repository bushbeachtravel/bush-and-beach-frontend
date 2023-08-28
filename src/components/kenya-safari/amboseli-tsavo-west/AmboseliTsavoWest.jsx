import SafariDetail from "../../modals/Safari";
import Footer from "../../Footer";
import { maraImages } from "../../../data/safari";
import { amboseliTsavoItenary, amboseliTsavoPromoAd } from "./data";

const AmboseliTsavoWestTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="4 Days & 3 Nights"
      safariTitle="Amboseli and Tsavo West"
      itenary={amboseliTsavoItenary}
      formData={amboseliTsavoPromoAd}
     />
    <Footer />
  </>
);
export default AmboseliTsavoWestTrip;