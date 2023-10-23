import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";

import { 
  mauritiusImages,
  mauritiusItenary, mauritiusPromoAd
 } from "@data/mauritiusData";
const MauritiusTrip = () => (
  <>
    <SafariDetail
      images={mauritiusImages}
      duration="4 Days & 3 Nights"
      safariTitle="Mauritius Escapade"
      itenary={mauritiusItenary}
      formData={mauritiusPromoAd}
      location="Mauritius"
     />
    <Footer />
  </>
);
export default MauritiusTrip;