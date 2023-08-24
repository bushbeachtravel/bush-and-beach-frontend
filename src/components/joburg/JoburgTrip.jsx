import SafariDetail from "../modals/Safari";
import Footer from "../Footer";
import { joburgImages } from "./data";
import { joburgItenary, joburgPromoAd } from "../../data/itenaries";

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