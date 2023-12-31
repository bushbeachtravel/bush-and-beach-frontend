import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";

import { 
  dubaiImages, dubai4NightsItenary, 
  dubai4NightsPromoAd
 } from "@data/dubaiData";
const DubaiTrip = () => (
  <>
    <SafariDetail
      images={dubaiImages}
      duration="3 Days & 2 Nights"
      safariTitle="Dubai"
      itenary={dubai4NightsItenary}
      formData={dubai4NightsPromoAd}
      location="Dubai"
     />
    <Footer />
  </>
);
export default DubaiTrip;