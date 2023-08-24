import SafariDetail from "../modals/Safari";
import Footer from "../Footer";
import { turkeyImages } from "./data";
import { turkeyItenary, turkeyPromoAd } from "../../data/itenaries";

const TurkeyTrip = () => (
  <>
    <SafariDetail
      images={turkeyImages}
      duration="5 Days & 4 Nights"
      safariTitle="Istanbul Discovery: Journey through Turkey's Cultural Heart"
      itenary={turkeyItenary}
      formData={turkeyPromoAd}
     />
    <Footer />
  </>
);
export default TurkeyTrip;