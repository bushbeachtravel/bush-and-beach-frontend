import Footer from "@home-page/Footer";
import SafariDetail from "@utils/Safari";

import { maraImages } from "@data/safari";
import { amboseliTsavoItenary, amboseliTsavoPromoAd } from "@data/amboseliTsavoWestData";

const AmboseliTsavoWestTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="4 Days & 3 Nights"
      safariTitle="Amboseli and Tsavo West"
      itenary={amboseliTsavoItenary}
      formData={amboseliTsavoPromoAd}
      location="Kenya"
     />
    <Footer />
  </>
);
export default AmboseliTsavoWestTrip;