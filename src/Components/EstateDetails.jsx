import { useLoaderData, useParams } from "react-router-dom";
const EstateDetails = () => {
  const estates = useLoaderData();
  console.log(estates);
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
  console.log(selectedEstate);

  return (
    <div className="card rounded-none my-14">
      <figure>
        <img src={img_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
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
          <h2>Price : {price}</h2>
        </div>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default EstateDetails;
