import Footer from "../../footer/Footer";
import SafariDetail from "../../../utils/Safari";

import { maraImages } from "../../../data/safari";
import { lakeNakuruMasaaiMaraItenary, lakeNakuruMasaaiMaraPromoAd } from "./data";

const FourDayKenyaSafari = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="4 Days & 3 Nights"
      safariTitle="Amboseli and Tsavo West"
      itenary={lakeNakuruMasaaiMaraItenary}
      formData={lakeNakuruMasaaiMaraPromoAd}
      location="Kenya"
     />
    <Footer />
  </>
);
export default FourDayKenyaSafari;