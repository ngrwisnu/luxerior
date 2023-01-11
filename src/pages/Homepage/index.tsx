import ClientsBrand from "../../components/groups/ClientsBrand/ClientsBrand";
import Footer from "../../components/groups/Footer/Footer";
import Header from "../../components/groups/Header";
import Hero from "../../components/groups/Homepage/Hero/Hero";
import JustArrive from "../../components/groups/Homepage/JustArrive/JustArrive";
import BrowseRooms from "../../components/groups/Homepage/BrowseRooms/BrowseRooms";
import AsideMenu from "../../components/groups/AsideMenu/AsideMenu";

const Homepage = () => {
  return (
    <>
      <Header theme="white" position="absolute" />
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
