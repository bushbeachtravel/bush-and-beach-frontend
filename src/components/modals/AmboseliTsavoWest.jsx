import SafariDetail from "./Safari";
import { maraImages } from "../../data/safari";
import { amboseliTsavoItenary, amboseliTsavoPromoAd } from "../../data/itenaries";

const AmboseliTsavoWestTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="4 Days & 3 Nights"
      safariTitle="Amboseli and Tsavo West"
      itenary={amboseliTsavoItenary}
      formData={amboseliTsavoPromoAd}
     />
  </>
);
export default AmboseliTsavoWestTrip;