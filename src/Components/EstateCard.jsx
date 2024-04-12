import { Link } from "react-router-dom";

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
    <div className="card card-compact bg-base-100 shadow-xl rounded-none">
      <figure className="h-60">
        <img src={img_url} alt="Property-image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <h2>Segment : {segment_name}</h2>
        <p>{description}</p>
        <h1>Price : {price}</h1>
        <h1>Area : {area}</h1>
        <h1>For : {status}</h1>
        <h1>Location : {location}</h1>
        <div className="card-actions justify-center">
          <Link to={`/estate/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
