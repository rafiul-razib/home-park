import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-9">
      <h2>Oops.. Page not found : 404</h2>
      <Link to={"/"}>
        <button className="btn btn-accent">Go back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
