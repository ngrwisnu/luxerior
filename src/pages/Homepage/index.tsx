import ClientsBrand from "../../components/groups/ClientsBrand/ClientsBrand";
import Footer from "../../components/groups/Footer/Footer";
import Header from "../../components/groups/Header";
import Hero from "../../components/groups/Homepage/Hero/Hero";
import JustArrive from "../../components/groups/Homepage/JustArrive/JustArrive";
import BrowseRooms from "../../components/groups/Homepage/BrowseRooms/BrowseRooms";
import AsideMenu from "../../components/groups/Sitemap/Sitemap";
import { useEffect, useRef, useState } from "react";
import useModalDOM from "../../helpers/hooks/useModalDOM";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const linkRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    try {
      const getData = async () => {
        let data = await fetch(
          `${process.env.REACT_APP_URL}/api/products/?page=1&limit=10`
        );
        let response = await data.json();
        setProducts(response.data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const getData = async () => {
        let data = await fetch(
          `${process.env.REACT_APP_URL}/api/categories/?page=1&limit=4`
        );
        let response = await data.json();
        setCategories(response.data);
      };
      getData();
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
      {/* @ts-ignore */}
      <JustArrive products={products} />
      <ClientsBrand />
      <AsideMenu />
      <Footer />
    </>
  );
};

export default Homepage;
