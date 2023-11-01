import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";

import { 
  joburgImages, joburgItenary, joburgPromoAd
 } from "@data/joburgData";

const JohannesburgTrib = () => (
  <>
    <SafariDetail
      images={joburgImages}
      duration="7 Days & 6 Nights"
      safariTitle="Johannesburg & Sun City Delight"
      itenary={joburgItenary}
      formData={joburgPromoAd}
      location="South Africa"
     />
    <Footer />
  </>
);
export default JohannesburgTrib;