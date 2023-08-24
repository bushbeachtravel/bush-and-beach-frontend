import SafariDetail from "../modals/Safari";
import Footer from "../Footer";
import { dubaiImages } from "./data";
import { dubai4NightsItenary, dubai4NightsPromoAd } from "../../data/itenaries";
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