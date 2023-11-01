import { 
  intlTourDestinations, title,
  bodyLeft, bodyRight, bodyTextTwo, title2, cities
 } from "@data/international";
import NavigationMenu from "@home-page/NavigationMenu";
import Footer from "@home-page/Footer";
import SafariCard from "@utils/SafariCard";
import SafariLandingPage from "@utils/SafariLanding";
import SafariIntroSection from "@utils/SafariIntroPage";
import bgImg from '@images/paris.jpg';
import '@styling/Kenya.css';

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
