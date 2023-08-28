import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";

import { turkeyImages,
  turkeyItenary, turkeyPromoAd
} from "./data";

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