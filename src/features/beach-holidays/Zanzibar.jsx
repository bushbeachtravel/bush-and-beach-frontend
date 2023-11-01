import { 
  zanzibar, zanzibarIslandActivities,
  zanzibarBodyTextLeft, zanzibarBodyTextRight,
  zanzibarIslandCallToActionText, zanzibarIslandContactSectionBody,
  zanzibarIslandContactSectionTitle, zanzibarPageTitle, 
  aboutZanzibarIslandTitle, aboutZanzibarIslandBodyParagraph,
 } from "@data/zanzibar";

import NavigationMenu from "@home-page/NavigationMenu";
import CoastalLandingPage from "@utils/coastalToursLanding";
import CoastalToursDescription from "@utils/coastalToursDescription";
import AboutCoastalTours from "@utils/aboutCoastalTours";
import CoastActivities from "@utils/coastActivities";
import CoastContact from "@utils/coastToursContact";
import Footer from "@home-page/Footer";

import bg from '@zanzibar-images/zanzibar.jpg';

import '@styling/Kenya.css';

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