import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-9">
      <Helmet>
        <title>HomPark | 404</title>
      </Helmet>
      <h2 className="text-xl lg:text-4xl font-bold">
        Sorry! Page not found : 404!!
      </h2>
      <Link to={"/"}>
        <button className="btn glass bg-indigo-500 text-white">
          Go back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
