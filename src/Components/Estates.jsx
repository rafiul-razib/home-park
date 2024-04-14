import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Estates = () => {
  const data = useLoaderData();

  return (
    <div className="text-center my-12 max-w-6xl mx-auto">
      <div data-aos="fade-down">
        <h1 className="text-xl lg:text-4xl font-bold">
          Explore the Luxury Living with HomePark
        </h1>
        <p className="text-md lg:text-lg">
          Hundreds of Luxurious Properties Waiting for You
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 my-8">
        {data.map((estate) => (
          <EstateCard
            data-aos="flip-up"
            key={estate.id}
            estate={estate}
          ></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Estates;
