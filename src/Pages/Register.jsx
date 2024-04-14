import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { updateProfile } from "firebase/auth";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [registerError, setRegisterError] = useState("");
  // console.log(showPass);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // console.log(name, photoUrl, email, password);
    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 character long");
      return;
    } else if (!/^(?=.*[A-Z])(?=.*\d).{6}$/.test(password)) {
      toast.warning(
        "Password should contain at least 1 uppercase and a Number!"
      );
      return;
    }

    register(email, password)
      .then((result) => {
        console.log(result.user);

        // Update user
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        }).then(() => {
          toast.success("User Register Successfully!");
        });
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div
      className="bg-indigo-200 bg-blend-multiply bg-cover"
      style={{
        backgroundImage: "url('https://i.ibb.co/HGJhv1b/resort-4.jpg')",
      }}
    >
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full rounded-none max-w-sm shadow-2xl bg-base-100">
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
              <button className="btn  glass bg-indigo-400 text-white">
                Register
              </button>
            </div>
            <div className="text-center">
              <p>
                Already have an account?{" "}
                <Link to={"/login"} className="text-blue-500 font-bold">
                  Login Now!
                </Link>
              </p>
            </div>
          </form>
          <div className="text-center pb-5">
            {registerError && <p className="text-red-600">{registerError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
