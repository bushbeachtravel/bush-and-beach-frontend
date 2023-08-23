import SafariDetail from "./Safari";
import { maraImages } from "../../data/safari";
import { nrbAmboseliLewaItenary, nrbAmboseliLewaPromo } from "../../data/itenaries";

const NairobiAmboseliLewaMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="8 Days & 7 Nights"
      safariTitle="Nairobi, Amboseli, Lewa conservancy, Masai Mara"
      itenary={nrbAmboseliLewaItenary}
      formData={nrbAmboseliLewaPromo}
     />
  </>
);
export default NairobiAmboseliLewaMaraTrip;