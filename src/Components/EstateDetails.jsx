import { useLoaderData, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const EstateDetails = () => {
  const estates = useLoaderData();
  // console.log(estates);
  const { id } = useParams();
  const selectedEstate = estates.find((estate) => estate.id == id);

  const {
    img_url,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    details_description,
  } = selectedEstate;
  // console.log(selectedEstate);

  return (
    <div className="card rounded-none mb-14">
      <figure>
        <img src={img_url} alt="Shoes" />
      </figure>
      <div className="card-body" data-aos="fade-up">
        <h2 className="card-title text-2xl font-bold">{estate_title}</h2>
        <h2 className="font-semibold text-md">Location : {location}</h2>
        <p>{details_description}</p>
        <div>
          <h2>Facilities :</h2>

          <div>
            {facilities.map((item) => (
              <li key={selectedEstate.id}>{item}</li>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-md">Area : {area}</h2>
        </div>

        <div>
          <h2 className="text-lg font-normal">For {status}</h2>
          <h2 className="text-xl font-bold">Price : {price}</h2>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
