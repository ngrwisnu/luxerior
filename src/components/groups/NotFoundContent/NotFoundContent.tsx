import { Link } from "react-router-dom";

interface NotFoundPageType {
  title?: string;
  body?: string;
}

const NotFoundContent = (props: NotFoundPageType) => {
  const { title = "404 Not Found", body = "This page does not exist!" } = props;

  return (
    <section className="">
      <div className="container mx-auto min-h-screen pt-36">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 text-center">
            <h2 className="text-3xl font-semibold mb-6">{title}</h2>
            <p className="text-lg mb-12">{body}</p>
            <Link
              to="/"
              className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundContent;
