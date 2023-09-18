import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";
import { maraImages } from "../../../data/safari";
import { masaaiMaraTsavoItenary, masaaiMaraTsavoPromoAd } from "./data";

const MasaaiMaraTsavo = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="9 Days & 8 Nights"
      safariTitle="9 Days Kenya Wildlife Safari"
      itenary={masaaiMaraTsavoItenary}
      formData={masaaiMaraTsavoPromoAd}
      location="Kenya"
     />
    <Footer />
  </>
);
export default MasaaiMaraTsavo;