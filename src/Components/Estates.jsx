import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";
AOS.init();
const Estates = () => {
  const data = useLoaderData();

  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <div className="text-center my-12 max-w-6xl mx-auto">
      <div data-aos="fade-down">
        <h1 className="text-4xl font-bold">
          Explore the Luxury Living with HomePark
        </h1>
        <p className="text-lg">
          Hundreds of Luxurious Properties Waiting for You
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 my-8">
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
