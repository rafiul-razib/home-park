import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { updateProfile } from "firebase/auth";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  // console.log(showPass);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, photoUrl, email, password);

    register(email, password)
      .then((result) => {
        console.log(result.user);

        // Update user
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        }).then(() => console.log("profile updated"));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
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
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <span
                className="absolute top-[62%] right-6"
                onClick={() => setShowPass(!showPass)}
              >
                {" "}
                {showPass ? <LuEyeOff /> : <LuEye />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Register</button>
              <p>
                Already have an account? <Link to={"/login"}>Login Now!</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
