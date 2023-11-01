import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";
import { maraImages } from "@data/safari";
import { masaaiMaraIternary, masaaiMaraPromoAd } from "@data/masaaiMaraData";

const MasaaiMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="3 Days & 2 Nights"
      safariTitle="Masaai Mara"
      itenary={masaaiMaraIternary}
      formData={masaaiMaraPromoAd}
      location="Kenya"
     />
    <Footer />
  </>
);
export default MasaaiMaraTrip;