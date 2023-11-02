import { Typography } from "@material-tailwind/react";
import NavigationMenu from "@home-page/NavigationMenu";
import Footer from "@home-page/Footer";

const CareersPage = () => (
  <>
    <NavigationMenu />
    <section className="flex justify-center py-20 mb-4 career-page">
      <div className="p-20">
        <Typography variant="h5" className="font-poppins">
          There no job oppenings at the moment
        </Typography>
      </div>
    </section>
    <Footer />
  </>
);
export default CareersPage;