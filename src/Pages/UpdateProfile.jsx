import { useContext, useEffect } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photo");

    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        toast.success("Profile Updated, reload to update photo.");
      })
      .catch(() => {
        toast.warning("An error ocurred, Profile not updated");
      });
  };
  return (
    <div className="w-96 mx-auto shadow-2xl my-9">
      <Helmet>
        <title>HomPark | Update Profile</title>
      </Helmet>
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            defaultValue={user && user.displayName}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            name="photo"
            defaultValue={user && user.photoURL}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={user && user.email}
            readOnly
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn glass bg-indigo-500 text-white">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
