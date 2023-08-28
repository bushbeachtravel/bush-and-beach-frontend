import { parks, animals } from "../../data/safari";
import NavigationMenu from "../NavigationMenu";
import Footer from "../Footer";
import SafariCard from "../modals/SafariCard";
import SafariLandingPage from "../modals/SafariLanding";
import SafariIntroSection from "../modals/SafariIntroPage";
import wild from '../../assets/images/wild.jpg'
import '../../assets/styles/Kenya.css';
import {
  title, bodyLeft, bodyRight,
  bodyTextTwo, title2
} from "./data";

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
        title="The Big Five"
      />
      <SafariCard tourDestination={parks} />
      <Footer />
    </>
  )
};
export default KenyaSafaris;
