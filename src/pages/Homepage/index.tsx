import ClientsBrand from "../../components/groups/ClientsBrand/ClientsBrand";
import Footer from "../../components/groups/Footer/Footer";
import Header from "../../components/groups/Header";
import Hero from "../../components/groups/Homepage/Hero/Hero";
import JustArrive from "../../components/groups/Homepage/JustArrive/JustArrive";
import BrowseRooms from "../../components/groups/Homepage/BrowseRooms/BrowseRooms";
import AsideMenu from "../../components/groups/Sitemap/Sitemap";
import { useEffect, useRef, useState } from "react";
import useModalDOM from "../../helpers/hooks/useModalDOM";
import axios from "axios";

const url = "https://5a743f9c-04ee-40f9-bc6e-a4c45bdf78cd.mock.pstmn.io";

const Homepage = () => {
  // const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const linkRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    try {
      const getProduct = async () => {
        // let response = await axios.get(`${url}/api/products/?page=1&limit=10`);
        // console.log(response);
        // let theData = response.data;
        // console.log(theData);

        await axios
          .all([
            axios.get(`${url}/api/products/?page=1&limit=10`),
            axios.get(`${url}/api/categories/?page=1&limit=4`),
          ])
          .then(
            axios.spread((res1, res2) => {
              let apiData = res2.data.data;
              setCategories(apiData);
            })
          );
      };

      getProduct();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const goto = (ref: any) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useModalDOM();

  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero clickHandler={() => goto(linkRef.current)} />
      <BrowseRooms refLink={linkRef} categories={categories} />
      <JustArrive />
      <ClientsBrand />
      <AsideMenu />
      <Footer />
    </>
  );
};

export default Homepage;
