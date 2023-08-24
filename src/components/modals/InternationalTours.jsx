// import { animals } from "../../data/safari";
import { cities } from "../../data/cities";
import { intlTourDestinations } from "../../data/international";
import NavigationMenu from "../NavigationMenu";
import Footer from "../Footer";
import SafariCard from "./SafariCard";
import SafariLandingPage from "./SafariLanding";
import SafariIntroSection from "./SafariIntroPage";
import wild from '../../assets/images/wild.jpg'
import '../../assets/styles/Kenya.css';

const InternationalTours = () => {
  const title = `Adventure like no other.`;
  const bodyLeft = `
        Welcome to Kenya which is known for being the world’s best safari
        destination with more than 50 epic national parks and reserves
        that are home to diverse wildlife including the big five
        (Lions, Leopards, Elephants, Rhinoceros and Buffalos).
        You will get to experience the notorious wildebeest migration
        with a picturesque view of over 2 million animals migrating from
        Serengeti national park into Masai Mara national park which normally
        happens in July to October every year. This experience has been
        ranked as one of the seven wonders of the world.
      `;
  const bodyRight = `
        Kenya is an ideal place for visitors to enjoy breath-taking tourism safaris.
        There are several activities including the hot air balloon safaris conducted
        majority in Masai Mara and Amboseli national reserve making it an unforgettable
        experience to view wildlife from the air. The organized safaris
        will help you visit several destinations in Kenya in the shortest
        time possible. Our Kenyan bush safaris is categorized as below
        depending on how long you would wish to stay enabling you to have
        a captivating and a memorable experience;
      `;
  const title2 = `A Symphony Of Untamed Nature&apos;s Beauty.`;
  const bodyTextTwo = `
        Let us take you from the iconic savannahs of the Maasai Mara, where golden grasses sway
        in harmony with the rhythms of the wild, to the enchanting embrace of
        Amboseli&apos;s elephants against the backdrop of towering Kilimanjaro, and also to witness
        the great wildebeest migration which paints the plains with a
        mesmerizing spectacle of life&apos;s eternal cycle.
        Come with us to see the Lions, leopards, and cheetahs prowl
        with regal grace both in the city as well as in the the grasslands.
        Come with us to Lake Nakuru to witness the theater of flamingo-pink ballet.
      `;
  return (
    <>
      <NavigationMenu />
      <SafariLandingPage
        backgroundImage={wild}
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
