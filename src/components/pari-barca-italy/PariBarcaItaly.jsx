import SafariDetail from "../modals/Safari";
import Footer from "../Footer";
import { barcaItalyParisImages } from "./data";
import { parisBaracItalyPromoAd, parisBarcaItalyItenary } from "../../data/itenaries";

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