import { 
  intlTourDestinations, title,
  bodyLeft, bodyRight, bodyTextTwo, title2, cities
 } from "./international";
import NavigationMenu from "../NavigationMenu";
import Footer from "../Footer";
import SafariCard from "../modals/SafariCard";
import SafariLandingPage from "../modals/SafariLanding";
import SafariIntroSection from "../modals/SafariIntroPage";
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
