import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";
import { maraImages } from "../../../data/safari";
import { nrbAmboseliMtKenyaItenary, nrbAmboseliMtKenyaPromoAd } from "./data";
const NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="8 Days & 7 Nights"
      safariTitle="Nairobi, Amboseli, Mt. Kenya, Lake Nakuru, Masai Mara"
      itenary={nrbAmboseliMtKenyaItenary}
      formData={nrbAmboseliMtKenyaPromoAd}
     />
    <Footer />
  </>
);
export default NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip;