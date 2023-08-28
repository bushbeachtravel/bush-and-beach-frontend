import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";
import { maraImages } from "../../../data/safari";
import { nrbAmboseliLewaItenary, nrbAmboseliLewaPromo } from "./data";

const NairobiAmboseliLewaMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="8 Days & 7 Nights"
      safariTitle="Nairobi, Amboseli, Lewa conservancy, Masai Mara"
      itenary={nrbAmboseliLewaItenary}
      formData={nrbAmboseliLewaPromo}
     />
    <Footer />
  </>
);
export default NairobiAmboseliLewaMaraTrip;