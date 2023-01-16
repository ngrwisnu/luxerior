import React from "react";
import { numberFormatter } from "../../../helpers/format/numberFormatter";

interface RelatedProductsType {
  relatedProducts: {
    title: string;
    price: number;
    imageUrl: string;
  }[];
}

const ProductSuggestions = (props: RelatedProductsType) => {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex overflow-x-auto mb-4 -mx-3">
          {props.relatedProducts.map((item) => {
            return (
              <div
                className="px-3 flex-none"
                style={{ width: "320px" }}
                key={item.imageUrl}
              >
                <div className="rounded-xl p-4 pb-8 relative bg-white">
                  <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                    <img
                      src="/images/chair-1.png"
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h5 className="text-lg font-semibold mt-4">{item.title}</h5>
                  <span className="">IDR {numberFormatter(item.price)}</span>
                  <a href="details.html" className="stretched-link">
                    {/* <!-- fake children --> */}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSuggestions;
