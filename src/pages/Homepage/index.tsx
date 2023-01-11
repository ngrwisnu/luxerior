import ClientsBrand from "../../components/groups/Homepage/ClientsBrand/ClientsBrand";
import Footer from "../../components/groups/Footer/Footer";
import Header from "../../components/groups/Header";
import Hero from "../../components/groups/Homepage/Hero/Hero";
import JustArrive from "../../components/groups/Homepage/JustArrive/JustArrive";
import BrowseRooms from "../../components/groups/Homepage/BrowseRooms/BrowseRooms";
import AsideMenu from "../../components/groups/Homepage/AsideMenu/AsideMenu";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <BrowseRooms />
      <JustArrive />
      <ClientsBrand />
      <AsideMenu />
      <Footer />
    </>
  );
};

export default Homepage;
