import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const EstateCard = ({ estate }) => {
  const {
    img_url,
    estate_title,
    id,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    details_description,
  } = estate;

  return (
    <div data-aos="flip-up">
      <div className="card card-compact bg-base-100 shadow-2xl rounded-none ">
        <figure className="h-60">
          <img src={img_url} alt="Property-image" />
        </figure>
        <div className="card-body">
          <div className="h-14">
            <h2 className="text-xl font-bold">{estate_title}</h2>
          </div>
          <h2>Segment : {segment_name}</h2>
          <p className="text-sm font-extralight">
            {description.slice(0, 150)}...
          </p>
          <p className="text-sm font-extralight">Available for : {status}</p>
          <div className="flex flex-col-reverse lg:flex-row justify-between my-5">
            <h1 className="text-md font-bold">Price : {price}</h1>
            <h1 className="text-md font-bold">Area : {area}</h1>
          </div>

          <div className="card-actions justify-center">
            <Link to={`/estate/${id}`}>
              <button className="btn glass bg-indigo-500 text-white">
                View Property
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
