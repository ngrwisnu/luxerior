import { Link } from "react-router-dom";
import { numberFormatter } from "../../../helpers/format/numberFormatter";
import { useGlobalContext } from "../../../helpers/hooks/useGlobalContext";

const CartDetails = () => {
  const { state, dispatch } = useGlobalContext();

  function removeItemfromCart(id: number) {
    if (Object.keys(state.cart).length !== 0) {
      dispatch({ type: "REMOVE_FROM_CART", id: id });
    }
  }

  return (
    <div className="w-full px-4 mb-4 md:w-8/12 md:mb-0" id="shopping-cart">
      <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
        <h3 className="text-2xl">Shopping Cart</h3>
      </div>

      <div className="border-b border-gray-200 mb-4 hidden md:block">
        <div className="flex flex-start items-center pb-2 -mx-4">
          <div className="px-4 flex-none">
            <div className="" style={{ width: "90px" }}>
              <h6>Photo</h6>
            </div>
          </div>
          <div className="px-4 w-5/12">
            <div className="">
              <h6>Product</h6>
            </div>
          </div>
          <div className="px-4 w-5/12">
            <div className="">
              <h6>Price</h6>
            </div>
          </div>
          <div className="px-4 w-2/12">
            <div className="text-center">
              <h6>Action</h6>
            </div>
          </div>
        </div>
      </div>

      {Object.keys(state.cart).length === 0 ? (
        <p id="cart-empty" className="text-center py-8">
          Ooops... Cart is empty!{" "}
          <Link to="/" className="underline">
            Shop Now
          </Link>
        </p>
      ) : (
        Object.keys(state.cart).map((key) => {
          const item = state.cart[key];

          return (
            <div
              className="flex flex-start flex-wrap items-center mb-4 -mx-4"
              key={key}
            >
              <div className="px-4 flex-none">
                <div className="" style={{ width: 90, height: 90 }}>
                  <img
                    src="/images/chair-1.png"
                    alt="chair-1"
                    className="object-cover rounded-xl w-full h-full"
                  />
                </div>
              </div>
              <div className="px-4 w-auto flex-1 md:w-5/12">
                <div className="">
                  <h6 className="font-semibold text-lg md:text-xl leading-8">
                    {item.title}
                  </h6>
                  <span className="text-sm md:text-lg">
                    {item.category.title}
                  </span>
                  <h6 className="font-semibold text-base md:text-lg block md:hidden">
                    IDR {numberFormatter(item.price)}
                  </h6>
                </div>
              </div>
              <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                <div className="">
                  <h6 className="font-semibold text-lg">
                    IDR {numberFormatter(item.price)}
                  </h6>
                </div>
              </div>
              <div className="px-4 w-2/12">
                <div className="text-center">
                  <button
                    onClick={() => removeItemfromCart(item.id)}
                    className="text-red-600 border-none focus:outline-none px-3 py-1"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CartDetails;
