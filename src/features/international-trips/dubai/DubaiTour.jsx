import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";

import { 
  dubaiImages, dubai4NightsItenary, 
  dubai4NightsPromoAd
 } from "./data";
const DubaiTrip = () => (
  <>
    <SafariDetail
      images={dubaiImages}
      duration="3 Days & 2 Nights"
      safariTitle="Masaai Mara"
      itenary={dubai4NightsItenary}
      formData={dubai4NightsPromoAd}
     />
    <Footer />
  </>
);
export default DubaiTrip;