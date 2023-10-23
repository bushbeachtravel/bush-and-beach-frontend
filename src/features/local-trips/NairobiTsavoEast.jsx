import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";
import { maraImages } from "@data/safari";
import {
  giantSafariIternary,
  giantSafariPromoAd
} from "@data/nrbTsavoData";

const NairobiTsavoEast = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="5 Days & 4 Nights"
      safariTitle="5 Days Giants Trail Safari "
      itenary={giantSafariIternary}
      formData={giantSafariPromoAd}
      location="Kenya"
    />
    <Footer />
  </>
);
export default NairobiTsavoEast;