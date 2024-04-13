import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet-async";

const Root = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
