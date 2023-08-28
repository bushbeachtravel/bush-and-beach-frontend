import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";

import { 
  egyptIsraelImages,
  egyptIsraelItenary, egyptIsraelPromoAd
 } from "./data";

const EgyptIsraelTrip = () => (
  <>
    <SafariDetail
      images={egyptIsraelImages}
      duration="9 Days & 8 Nights"
      safariTitle="Sacred Pilgrimage Tour: Egypt & Israel Journey of Faith"
      itenary={egyptIsraelItenary}
      formData={egyptIsraelPromoAd}
     />
    <Footer />
  </>
);
export default EgyptIsraelTrip;