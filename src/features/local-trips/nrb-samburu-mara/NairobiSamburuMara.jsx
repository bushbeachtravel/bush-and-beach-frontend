import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";
import { maraImages } from "../../../data/safari";
import { maraNrbSamburPromoAd,maraNrbSamburuItenary } from "./data";

const NairobiSamburuMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="7 Days & 6 Nights"
      safariTitle="Nairobi, Samburu and Masaai Mara"
      itenary={maraNrbSamburuItenary}
      formData={maraNrbSamburPromoAd}
      location="Kenya"
     />
    <Footer />
  </>
);
export default NairobiSamburuMaraTrip;