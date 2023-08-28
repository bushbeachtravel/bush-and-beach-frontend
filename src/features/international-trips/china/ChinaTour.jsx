import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";

import { 
  chinaImages,
  chinaItenary, chinaPromoAd
 } from "./data";
 
const ChinaTrip = () => (
  <>
    <SafariDetail
      images={chinaImages}
      duration="10 Days & 9 Nights"
      safariTitle="China Canton Fair Trade Exhibition Adventure"
      itenary={chinaItenary}
      formData={chinaPromoAd}
     />
    <Footer />
  </>
);
export default ChinaTrip;