import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";

import { 
  joburgImages, joburgItenary, joburgPromoAd
 } from "./data";

const JohannesburgTrib = () => (
  <>
    <SafariDetail
      images={joburgImages}
      duration="7 Days & 6 Nights"
      safariTitle="Johannesburg & Sun City Delight"
      itenary={joburgItenary}
      formData={joburgPromoAd}
     />
    <Footer />
  </>
);
export default JohannesburgTrib;