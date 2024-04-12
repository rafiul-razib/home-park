import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";
const Estates = () => {
  const data = useLoaderData();
  return (
    <div className="text-center my-24">
      <h1 className="text-2xl font-bold">
        Explore the Luxury Living with HomePark
      </h1>
      <p className="text-lg">
        Hundreds of Luxurious Properties Waiting for You
      </p>

      <div className="grid grid-cols-3 gap-5 my-12">
        {data.map((estate) => (
          <EstateCard key={estate.id} estate={estate}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Estates;
