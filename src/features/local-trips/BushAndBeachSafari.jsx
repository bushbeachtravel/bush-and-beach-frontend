import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";
import { maraImages } from "@data/safari";
import {
  bushAndBeachIternary,
  bushAndBeachPromoAd
}
  from "@data/bushBeachData";

const BushAndBeachSafari = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="10 Days & 9 Nights"
      safariTitle="10 Days Bush and Beach Safari"
      itenary={bushAndBeachIternary}
      formData={bushAndBeachPromoAd}
      location="Kenya"
    />
    <Footer />
  </>
);
export default BushAndBeachSafari;