import { parks, animals } from "@data/safari";
import NavigationMenu from "@home-page/NavigationMenu";
import Footer from "@home-page/Footer";
import SafariCard from "@utils/SafariCard";
import SafariLandingPage from "@utils/SafariLanding";
import SafariIntroSection from "@utils/SafariIntroPage";
import wild from '@images/wild.jpg'
import '@styling/Kenya.css';
import {
  title, bodyLeft, bodyRight,
  bodyTextTwo, title2
} from "@data/kenyaData";

const KenyaSafaris = () => {
  return (
    <>
      <NavigationMenu />
      <SafariLandingPage
        backgroundImage={wild}
        title="Welcome To Kenya Safari"
      />
      <SafariIntroSection
        pageTitle={title}
        pageBodyLeft={bodyLeft}
        pageBodyRight={bodyRight}
        images={animals}
        title2={title2}
        bodyTextwo={bodyTextTwo}
        title="The Big Five."
      />
      <SafariCard tourDestination={parks} />
      <Footer />
    </>
  )
};
export default KenyaSafaris;
