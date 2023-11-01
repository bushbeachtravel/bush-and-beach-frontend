import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";

import { 
  malaysiaImages, malaysiaItenary,
  malaysiaPromoAd
 } from "@data/malaysiaData";

const MalaysiaTrip = () => (
  <>
    <SafariDetail
      images={malaysiaImages}
      duration="7 Days & 6 Nights"
      safariTitle="Malaysia & Singapore Exploration"
      itenary={malaysiaItenary}
      formData={malaysiaPromoAd}
      location="Malaysia"
     />
    <Footer />
  </>
);
export default MalaysiaTrip;