import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";
import { maraImages } from "@data/safari";
import { maraNrbSamburPromoAd,maraNrbSamburuItenary } from "@data/narbSamburuMaraData";

const NairobiSamburuMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="7 Days & 6 Nights"
      safariTitle="Nairobi, Samburu and Masaai Mara"
      itenary={maraNrbSamburuItenary}
      formData={maraNrbSamburPromoAd}
      location="Kenya"
     />
    <Footer />
  </>
);
export default NairobiSamburuMaraTrip;