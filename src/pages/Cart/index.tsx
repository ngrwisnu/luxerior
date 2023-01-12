import Breadcrumps from "../../components/atom/Breadcrumps/Breadcrumps";
import CartDetails from "../../components/groups/Cart/CartDetails";
import CheckoutForm from "../../components/groups/Cart/CheckoutForm";
import Footer from "../../components/groups/Footer/Footer";
import Header from "../../components/groups/Header";
import Sitemap from "../../components/groups/Sitemap/Sitemap";

const Cart = () => {
  return (
    <>
      <Header theme="dark" position="" />
      <Breadcrumps
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <CartDetails />
            <CheckoutForm />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
};

export default Cart;
