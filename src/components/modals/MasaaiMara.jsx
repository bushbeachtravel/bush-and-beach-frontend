import SafariDetail from "./Safari";
import { maraImages } from "../../data/safari";
import { masaaiMaraIternary, maraPromoAd } from "../../data/itenaries";
const MasaaiMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="3 Days & 2 Nights"
      safariTitle="Masaai Mara"
      itenary={masaaiMaraIternary}
      formData={maraPromoAd}
     />
  </>
);
export default MasaaiMaraTrip;