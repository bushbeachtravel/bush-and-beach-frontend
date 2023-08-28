import { 
  zanzibar, zanzibarIslandActivities,
  zanzibarBodyTextLeft, zanzibarBodyTextRight,
  zanzibarIslandCallToActionText, zanzibarIslandContactSectionBody,
  zanzibarIslandContactSectionTitle, zanzibarPageTitle, 
  aboutZanzibarIslandTitle, aboutZanzibarIslandBodyParagraph,
 } from "./zanzibar";
import NavigationMenu from "../../home-page/NavigationMenu";
import CoastalLandingPage from "../coastal-tours/coastalToursLanding";
import CoastalToursDescription from "../coastal-tours/coastalToursDescription";
import AboutCoastalTours from "../coastal-tours/aboutCoastalTours";
import CoastActivities from "../coastal-tours/coastActivities";
import CoastContact from "../coastal-tours/coastToursContact";
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