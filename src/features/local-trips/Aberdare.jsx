import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";
import { maraImages } from "@data/safari";
import { aberdareIternary, aberdarePromoAd } from "@data/aberdareData";

const Abderdares = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="9 Days & 8 Nights"
      safariTitle="9 Days Kenya Wildlife Safari"
      itenary={aberdareIternary}
      formData={aberdarePromoAd}
      location="Kenya"
     />
    <Footer />
  </>
);
export default Abderdares;