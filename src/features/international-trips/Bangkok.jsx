import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";
import { 
  thailandImages,
  bangkokItenary, bangkokPromoAd
} from "@data/bangkokData";

const BangkokTrip = () => (
  <>
    <SafariDetail
      images={thailandImages}
      duration="7 Days & 6 Nights"
      safariTitle="Bangkok & Phuket Getaway"
      itenary={bangkokItenary}
      formData={bangkokPromoAd}
      location="Thailand"
     />
    <Footer />
  </>
);
export default BangkokTrip;