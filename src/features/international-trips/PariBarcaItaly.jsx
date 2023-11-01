import SafariDetail from "@utils/Safari";
import Footer from "@home-page/Footer";

import { 
  barcaItalyParisImages,
  parisBaracItalyPromoAd, parisBarcaItalyItenary
} from "@data/pariBarcaItalyData";

const ParisBarcaItaly = () => (
  <>
    <SafariDetail
      images={barcaItalyParisImages}
      duration="7 Days & 6 Nights"
      safariTitle="Paris, Barcelona & Italy Adventure"
      itenary={parisBarcaItalyItenary}
      formData={parisBaracItalyPromoAd}
      location="Europe"
     />
    <Footer />
  </>
);
export default ParisBarcaItaly;