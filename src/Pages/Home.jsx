import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HomPark | Home</title>
      </Helmet>
      <Banner />
    </div>
  );
};

export default Home;
