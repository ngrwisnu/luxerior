import Breadcrumps from "../../components/atom/Breadcrumps/Breadcrumps";
import Footer from "../../components/groups/Footer/Footer";
import Header from "../../components/groups/Header";
import Sitemap from "../../components/groups/Sitemap/Sitemap";
import SuccessCheckout from "../../components/groups/SuccessCheckout/SuccessCheckout";

const Success = () => {
  return (
    <>
      <Header theme="dark" position="" />
      <Breadcrumps
        list={[
          { url: "/", name: "Home" },
          { url: "/success-checkout", name: "Successfully Checkout" },
        ]}
      />
      <SuccessCheckout />
      <Sitemap />
      <Footer />
    </>
  );
};

export default Success;
