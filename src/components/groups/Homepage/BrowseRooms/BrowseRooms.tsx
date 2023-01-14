import { numberFormatter } from "../../../../helpers/format/numberFormatter";
import { BrowseSectionType, ratioType } from "./BrowseRoomsTypes";

const BrowseRooms = (props: BrowseSectionType) => {
  const { categories } = props;

  const ratioClassNames: ratioType = {
    wrapper: {
      default: {
        "1/9": "col-span-9 row-span-1",
      },
      md: {
        "1/4": "md:col-span-4 md:row-span-1",
        "2/2": "md:col-span-2 md:row-span-2",
        "2/3": "md:col-span-3 md:row-span-2",
      },
    },
    meta: {
      "1/9":
        "left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72",
      "1/4":
        "left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72",
      "2/2":
        "inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12",
      "2/3":
        "inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12",
    },
  };

  return (
    <section className="flex bg-gray-100 py-16 px-4" id="browse-the-room">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold" ref={props.refLink}>
            browse the room <br className="" />
            that we designed for you
          </h3>
        </div>
        <div className="grid grid-rows-2 grid-cols-9 gap-4">
          {categories.map((category, index) => {
            console.log(category);
            return (
              <div
                key={category.id}
                className={`relative ${
                  ratioClassNames.wrapper.md[category.ratio.md]
                } ${
                  ratioClassNames.wrapper.default[category.ratio.default]
                } card`}
                style={{ height: index === 0 ? 180 : "auto" }}
              >
                <div className="card-shadow rounded-xl">
                  <img
                    src={`images/${category.imageUrl}`}
                    alt=""
                    className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
                  />
                </div>
                <div
                  className={`overlay ${
                    ratioClassNames.meta[category.ratio.md]
                  }`}
                >
                  <h5 className="text-lg font-semibold">{category.title}</h5>
                  <span className="">
                    {numberFormatter(category.products)} item(s)
                  </span>
                </div>
                <a href="details.html" className="stretched-link">
                  {/* <!-- fake children --> */}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrowseRooms;
