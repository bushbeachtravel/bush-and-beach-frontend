import SafariDetail from "../../../utils/Safari";
import Footer from "../../footer/Footer";

import { 
  barcaItalyParisImages,
  parisBaracItalyPromoAd, parisBarcaItalyItenary
} from "./data";

const ParisBarcaItaly = () => (
  <>
    <SafariDetail
      images={barcaItalyParisImages}
      duration="7 Days & 6 Nights"
      safariTitle="Paris, Barcelona & Italy Adventure"
      itenary={parisBarcaItalyItenary}
      formData={parisBaracItalyPromoAd}
     />
    <Footer />
  </>
);
export default ParisBarcaItaly;