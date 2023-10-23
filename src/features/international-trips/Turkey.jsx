import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";

import { turkeyImages,
  turkeyItenary, turkeyPromoAd
} from "@data/turkeyData";

const TurkeyTrip = () => (
  <>
    <SafariDetail
      images={turkeyImages}
      duration="5 Days & 4 Nights"
      safariTitle="Istanbul Discovery: Journey through Turkey's Cultural Heart"
      itenary={turkeyItenary}
      formData={turkeyPromoAd}
      location="Turkey"
     />
    <Footer />
  </>
);
export default TurkeyTrip;