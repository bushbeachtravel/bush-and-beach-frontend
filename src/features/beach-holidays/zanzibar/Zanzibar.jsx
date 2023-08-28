import { 
  zanzibar, zanzibarIslandActivities,
  zanzibarBodyTextLeft, zanzibarBodyTextRight,
  zanzibarIslandCallToActionText, zanzibarIslandContactSectionBody,
  zanzibarIslandContactSectionTitle, zanzibarPageTitle, 
  aboutZanzibarIslandTitle, aboutZanzibarIslandBodyParagraph,
 } from "./zanzibar";
import NavigationMenu from "../../home-page/NavigationMenu";
import CoastalLandingPage from "../../../utils/coastalToursLanding";
import CoastalToursDescription from "../../../utils/coastalToursDescription";
import AboutCoastalTours from "../../../utils/aboutCoastalTours";
import CoastActivities from "../../../utils/coastActivities";
import CoastContact from "../../../utils/coastToursContact";
import Footer from "../../footer/Footer";

import bg from '../../../assets/images/zanzibar/zanzibar.jpg';

import '../../../assets/styles/Kenya.css';

const ZanzibarTours = () => {
  return (
    <>
      <NavigationMenu />
      <CoastalLandingPage
        backgroundImage={bg}
        pageTitle="Welcome To Zanzibar Island!."
      />
      <CoastalToursDescription
        pageTitle={zanzibarPageTitle}
        pageBodyLeft={zanzibarBodyTextLeft}
        pageBodyRight={zanzibarBodyTextRight}
        carouselImages={zanzibar}
      />
      <AboutCoastalTours
        leadingHeader={aboutZanzibarIslandTitle}
        bodyParagraph={aboutZanzibarIslandBodyParagraph}
      />
      <CoastActivities
        activities={zanzibarIslandActivities}
        location="Zanzibar Island"
      />
      <CoastContact
        contactSectionTitle={zanzibarIslandContactSectionTitle}
        contactSectionBody={zanzibarIslandContactSectionBody}
        callToActionText={zanzibarIslandCallToActionText}
      />
      <Footer />
    </>
  );
};
export default ZanzibarTours;