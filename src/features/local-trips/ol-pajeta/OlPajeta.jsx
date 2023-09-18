import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";
import { maraImages } from "../../../data/safari";
import { olPajetaIternary, olPajetaPromoAd } from "./data";

const OlPajeta = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="11 Days & 10 Nights"
      safariTitle="11 Days Kenya Classic Safari"
      itenary={olPajetaIternary}
      formData={olPajetaPromoAd}
      location="Kenya"
     />
    <Footer />
  </>
);
export default OlPajeta;