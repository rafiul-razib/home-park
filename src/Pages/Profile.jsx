import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-9 p-2">
      <Helmet>
        <title>HomPark | Profile</title>
      </Helmet>
      <figure className="rounded-full w-24 h-24 mx-auto">
        <img src={user.photoURL} alt="Profile picture" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl font-bold">{user.displayName}</h2>
        <p className="text-xl">{user.email}</p>
        <div className="card-actions justify-center">
          <h1 className="text-sm">
            Want to update your profile?{" "}
            <Link to="/updateProfile" className="text-red-600">
              Update Now!
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
