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
  const [details, setDetails] = useState<initialValueType>({
    title: "",
    price: 0,
    description: "",
    imgUrls: [],
    relatedProducts: [],
  });
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://5a743f9c-04ee-40f9-bc6e-a4c45bdf78cd.mock.pstmn.io/api/products/${productId}`
      )
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
      {error && (
        <div className="flex justify-center items-center w-full h-32">
          <h4 className="text-3xl">Product Not Found!</h4>
        </div>
      )}
      {!error && (
        <ProductPreview
          title={details.title}
          price={details.price}
          description={details.description}
          imageUrl={details.imgUrls}
        />
      )}
      {!error && (
        <ProductSuggestions relatedProducts={details.relatedProducts} />
      )}

      <ClientsBrand />
      <AsideMenu />
      <Footer />
    </>
  );
};

export default Detail;
