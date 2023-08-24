import SafariDetail from "../modals/Safari";
import Footer from "../Footer";
import { chinaImages } from "./data";
import { chinaItenary, chinaPromoAd } from "../../data/itenaries";

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