import SafariDetail from "../../modals/Safari";
import Footer from "../../Footer";
import { maraImages } from "../../../data/safari";
import { lakeNakPromoAd, lakeNakuruIternary } from "./data";
const LakeNakuruMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="4 Days & 3 Nights"
      safariTitle="Lake Nakuru and Masai Mara"
      itenary={lakeNakuruIternary}
      formData={lakeNakPromoAd}
     />
    <Footer />
  </>
);
export default LakeNakuruMaraTrip;