import Breadcrumps from "../../components/atom/Breadcrumps/Breadcrumps";
import Footer from "../../components/groups/Footer/Footer";
import Header from "../../components/groups/Header";
import AsideMenu from "../../components/groups/AsideMenu/AsideMenu";
import ClientsBrand from "../../components/groups/ClientsBrand/ClientsBrand";
import ProductPreview from "../../components/groups/Detail/ProductPreview";
import ProductSuggestions from "../../components/groups/Detail/ProductSuggestions";

const Detail = () => {
  return (
    <>
      <Header theme="dark" position="" />
      <Breadcrumps
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/1212", name: "Office" },
          { url: "/categories/1212/product/1123", name: "Details" },
        ]}
      />
      <ProductPreview />
      <ProductSuggestions />
      <ClientsBrand />
      <AsideMenu />
      <Footer />
    </>
  );
};

export default Detail;
