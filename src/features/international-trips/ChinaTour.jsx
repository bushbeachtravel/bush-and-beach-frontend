import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";

import { 
  chinaImages,
  chinaItenary, chinaPromoAd
 } from "@data/chinaData";
 
const ChinaTrip = () => (
  <>
    <SafariDetail
      images={chinaImages}
      duration="10 Days & 9 Nights"
      safariTitle="China Canton Fair Trade Exhibition Adventure"
      itenary={chinaItenary}
      formData={chinaPromoAd}
      location="China"
     />
    <Footer />
  </>
);
export default ChinaTrip;