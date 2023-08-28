import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";

import { 
  mauritiusImages,
  mauritiusItenary, mauritiusPromoAd
 } from "./data";
const MauritiusTrip = () => (
  <>
    <SafariDetail
      images={mauritiusImages}
      duration="4 Days & 3 Nights"
      safariTitle="Mauritius Escapade"
      itenary={mauritiusItenary}
      formData={mauritiusPromoAd}
     />
    <Footer />
  </>
);
export default MauritiusTrip;