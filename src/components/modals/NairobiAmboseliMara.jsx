import SafariDetail from "./Safari";
import { maraImages } from "../../data/safari";
import { nrbAmboseliMaraItenary, nrbAmoseliMaraPromo } from "../../data/itenaries";

const NairobiAmboseliMaraTrip = () => (
  <>
    <SafariDetail
      images={maraImages}
      duration="6 Days & 5 Nights"
      safariTitle="Nairobi, Amboseli and Masai Mara"
      itenary={nrbAmboseliMaraItenary}
      formData={nrbAmoseliMaraPromo}
     />
  </>
);
export default NairobiAmboseliMaraTrip;