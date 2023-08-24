import SafariDetail from "../modals/Safari";
import Footer from "../Footer";
import { malaysiaImages } from "./data";
import { malaysiaItenary, malaysiaPromoAd } from "../../data/itenaries";

const MalaysiaTrip = () => (
  <>
    <SafariDetail
      images={malaysiaImages}
      duration="7 Days & 6 Nights"
      safariTitle="Malaysia & Singapore Exploration"
      itenary={malaysiaItenary}
      formData={malaysiaPromoAd}
     />
    <Footer />
  </>
);
export default MalaysiaTrip;