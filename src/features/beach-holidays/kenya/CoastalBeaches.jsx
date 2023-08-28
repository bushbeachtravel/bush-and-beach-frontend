import {
  beaches, kenyaCoastActivities, pageBodyTextLeft,
  pageTitle, pageBodyTextRight, aboutKenyaCoastTitle, aboutKenyaCoastBodyParagraph,
  kenyaCoastContactSectionTitle, kenyaCoastContactSectionBody,
  kenyaCoastCallToActionText
} from "./mombasa";

import NavigationMenu from "../../home-page/NavigationMenu";
import Footer from "../../footer/Footer";

import CoastalLandingPage from "../../../utils/coastalToursLanding";
import AboutCoastalTours from "../../../utils/aboutCoastalTours";
import CoastActivities from "../../../utils/coastActivities";
import CoastContact from "../../../utils/coastToursContact";


import CoastalToursDescription from "../../../utils/coastalToursDescription";
import coast from '../../../assets/images/mombasa/coast.jpg';
import '../../../assets/styles/Kenya.css';

const KenyaCostalBeaches = () => {
  return (
    <>
      <NavigationMenu />
      <CoastalLandingPage
        backgroundImage={coast}
        pageTitle="Welcome To Kenya Coastal Beaches!"
      />
      <CoastalToursDescription
        pageTitle={pageTitle}
        pageBodyLeft={pageBodyTextLeft}
        pageBodyRight={pageBodyTextRight}
        carouselImages={beaches}
      />
      <AboutCoastalTours
        leadingHeader={aboutKenyaCoastTitle}
        bodyParagraph={aboutKenyaCoastBodyParagraph}
      />
      <CoastActivities
        activities={kenyaCoastActivities}
        location="Kenya Coast"
      />
      <CoastContact
        contactSectionTitle={kenyaCoastContactSectionTitle}
        contactSectionBody={kenyaCoastContactSectionBody}
        callToActionText={kenyaCoastCallToActionText}
      />
      <Footer />
    </>
  );
};
export default KenyaCostalBeaches;