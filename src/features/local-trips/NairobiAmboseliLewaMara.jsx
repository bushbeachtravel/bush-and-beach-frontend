import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";
import { maraImages } from "@data/safari";
import { nrbAmboseliLewaItenary, nrbAmboseliLewaPromo } from "@data/nrbAmboseliLewaData";

const NairobiAmboseliLewaMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="8 Days & 7 Nights"
      safariTitle="Nairobi, Amboseli, Lewa conservancy, Masai Mara"
      itenary={nrbAmboseliLewaItenary}
      formData={nrbAmboseliLewaPromo}
      location="Kenya"
     />
    <Footer />
  </>
);
export default NairobiAmboseliLewaMaraTrip;