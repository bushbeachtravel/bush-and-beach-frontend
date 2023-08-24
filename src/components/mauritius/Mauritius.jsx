import SafariDetail from "../modals/Safari";
import Footer from "../Footer";
import { mauritiusImages } from "./data";
import { mauritiusItenary, mauritiusPromoAd } from "../../data/itenaries";

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