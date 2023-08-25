import {
  beaches, kenyaCoastActivities, pageBodyTextLeft,
  pageTitle, pageBodyTextRight, aboutKenyaCoastTitle, aboutKenyaCoastBodyParagraph,
  kenyaCoastContactSectionTitle, kenyaCoastContactSectionBody,
  kenyaCoastCallToActionText
} from "./mombasa";

import NavigationMenu from "../NavigationMenu";
import Footer from "../Footer";

import CoastalLandingPage from "../coastal-tours/coastalToursLanding";
import AboutCoastalTours from "../coastal-tours/aboutCoastalTours";
import CoastActivities from "../coastal-tours/coastActivities";
import CoastContact from "../coastal-tours/coastToursContact";

import CoastalToursDescription from "../coastal-tours/coastalToursDescription";
import coast from '../../assets/images/mombasa/coast.jpg';
import '../../assets/styles/Kenya.css';

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