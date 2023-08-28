import { 
  intlTourDestinations, title,
  bodyLeft, bodyRight, bodyTextTwo, title2, cities
 } from "./international";
import NavigationMenu from "../home-page/NavigationMenu";
import Footer from "../footer/Footer";
import SafariCard from "../../utils/SafariCard";
import SafariLandingPage from "../../utils/SafariLanding";
import SafariIntroSection from "../../utils/SafariIntroPage";
import bgImg from '../../assets/images/paris.jpg';
import '../../assets/styles/Kenya.css';

const InternationalTours = () => {
  return (
    <>
      <NavigationMenu />
      <SafariLandingPage
        backgroundImage={bgImg}
        title="International Tours."
      />
      <SafariIntroSection
        pageTitle={title}
        pageBodyLeft={bodyLeft}
        pageBodyRight={bodyRight}
        images={cities}
        title2={title2}
        bodyTextwo={bodyTextTwo}
        title="International Destinations"
      />
      <SafariCard tourDestination={intlTourDestinations} />
      <Footer />
    </>
  )
};
export default InternationalTours;
