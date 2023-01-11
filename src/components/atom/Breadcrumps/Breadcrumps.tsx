import { Link } from "react-router-dom";

interface BreadcrumpsType {
  list: { url: string; name: string }[];
}

const Breadcrumps = (props: BreadcrumpsType) => {
  const { list } = props;

  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {list.map((item, idx) => {
            const arias =
              idx === list.length - 1 ? { "aria-label": "current-page" } : {};

            return (
              <li key={item.url}>
                <Link to={item.url} {...arias}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumps;
