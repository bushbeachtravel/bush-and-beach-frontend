import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";
import { maraImages } from "@data/safari";
import {
  nrbAmboseliMtKenyaItenary,
  nrbAmboseliMtKenyaPromoAd
} from "@data/nrbAmboseliKenyaData";

const NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="8 Days & 7 Nights"
      safariTitle="Nairobi, Amboseli, Mt. Kenya, Lake Nakuru, Masai Mara"
      itenary={nrbAmboseliMtKenyaItenary}
      formData={nrbAmboseliMtKenyaPromoAd}
      location="Kenya"
    />
    <Footer />
  </>
);
export default NairobiAmboseliMtKenyaLakeNakuruMasaaiMaraTrip;