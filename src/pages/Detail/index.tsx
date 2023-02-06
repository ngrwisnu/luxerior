import Breadcrumps from "../../components/atom/Breadcrumps/Breadcrumps";
import Footer from "../../components/groups/Footer/Footer";
import Header from "../../components/groups/Header";
import AsideMenu from "../../components/groups/Sitemap/Sitemap";
import ClientsBrand from "../../components/groups/ClientsBrand/ClientsBrand";
import ProductPreview from "../../components/groups/Detail/ProductPreview";
import ProductSuggestions from "../../components/groups/Detail/ProductSuggestions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { initialValueType } from "./Details";

const Detail = () => {
  const [error, setError] = useState(false);
  const [details, setDetails] = useState<initialValueType>(null!);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.URL}/api/products/${productId}`)
      .then((response) => setDetails(response.data))
      .catch((error) => {
        if (error) {
          setError(true);
        }
      });
  }, [productId]);

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
      {error && details === null && (
        <div className="flex justify-center items-center w-full h-32">
          <h4 className="text-3xl">Product Not Found!</h4>
        </div>
      )}
      {!error && details !== null && <ProductPreview details={details} />}
      {!error && details !== null && (
        <ProductSuggestions relatedProducts={details.relatedProducts} />
      )}

      <ClientsBrand />
      <AsideMenu />
      <Footer />
    </>
  );
};

export default Detail;
