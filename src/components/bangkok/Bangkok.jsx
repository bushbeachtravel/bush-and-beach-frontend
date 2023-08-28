import SafariDetail from "../modals/Safari";
import Footer from "../Footer";
import { 
  thailandImages,
  bangkokItenary, bangkokPromoAd
} from "./data";

const BangkokTrip = () => (
  <>
    <SafariDetail
      images={thailandImages}
      duration="7 Days & 6 Nights"
      safariTitle="Bangkok & Phuket Getaway"
      itenary={bangkokItenary}
      formData={bangkokPromoAd}
     />
    <Footer />
  </>
);
export default BangkokTrip;