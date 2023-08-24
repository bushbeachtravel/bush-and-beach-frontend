import SafariDetail from "../modals/Safari";
import Footer from "../Footer";
import { thailandImages } from "./data";
import { bangkokItenary, bangkokPromoAd } from "../../data/itenaries";

const BangkokTrip = () => (
  <>
    <SafariDetail
      images={thailandImages}
      duration="7 Days & 6 Nights"
      safariTitle="Johannesburg & Sun City Delight"
      itenary={bangkokItenary}
      formData={bangkokPromoAd}
     />
    <Footer />
  </>
);
export default BangkokTrip;