import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";
import { maraImages } from "@data/safari";
import {
  nrbAmboseliMaraItenary,
  nrbAmoseliMaraPromo
} from "@data/nrbAmboseliMaraData";

const NairobiAmboseliMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="6 Days & 5 Nights"
      safariTitle="Nairobi, Amboseli and Masai Mara"
      itenary={nrbAmboseliMaraItenary}
      formData={nrbAmoseliMaraPromo}
      location="Kenya"
    />
    <Footer />
  </>
);
export default NairobiAmboseliMaraTrip;