import { useState, useEffect } from "react";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

interface ProductsType {
  products: {
    id: number;
    idc: number;
    title: string;
    price: number;
    imageUrl: string;
  }[];
}

const JustArrive = (props: ProductsType) => {
  const { products } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products.length !== 0) return setIsLoading(false);
  }, [products]);

  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="flex justify-center text-center mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Just Arrived <br className="" />
            this summer for you
          </h3>
        </div>
      </div>
      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto"></div>
        {/* <!-- <div className="overflow-hidden z-10"> --> */}
        <div className="flex -mx-4 flex-row relative">
          {isLoading && (
            <Loading
              numOfProducts={products.length !== 0 ? products.length : 6}
            />
          )}

          {products.length !== 0 && !isLoading ? (
            products.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <p>No products found!</p>
            </div>
          )}
        </div>
        {/* <!-- </div> --> */}
      </div>
    </section>
  );
};

export default JustArrive;
