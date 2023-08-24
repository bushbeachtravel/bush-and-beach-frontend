import SafariDetail from "./Safari";
import Footer from "../Footer";
import { maraImages } from "../../data/safari";
import { maraNrbSamburuItenary, maraNrbSamburPromoAd } from "../../data/itenaries";
const NairobiSamburuMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="7 Days & 6 Nights"
      safariTitle="Nairobi, Samburu and Masaai Mara"
      itenary={maraNrbSamburuItenary}
      formData={maraNrbSamburPromoAd}
     />
    <Footer />
  </>
);
export default NairobiSamburuMaraTrip;