import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";
import { maraImages } from "../../../data/safari";
import { masaaiMaraIternary, masaaiMaraPromoAd } from "./data";
const MasaaiMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="3 Days & 2 Nights"
      safariTitle="Masaai Mara"
      itenary={masaaiMaraIternary}
      formData={masaaiMaraPromoAd}
     />
    <Footer />
  </>
);
export default MasaaiMaraTrip;