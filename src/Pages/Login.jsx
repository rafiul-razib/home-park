import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { toast } from "react-toastify";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const { googleSignIn, login, facebookSignIn, githubSignIn } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const location = useLocation();
  // console.log("from login", location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // console.log(email, password);
    setErrorMessage("");

    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User logged in successfully");
        navigate(location.state);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error);
      });
  };
  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => console.log(result.user))
      .catch((error) => {
        console.log(error);
        setErrorMessage(error);
      });
  };

  return (
    <div
      className=" bg-indigo-200 bg-cover bg-blend-multiply"
      style={{ backgroundImage: "url('https://i.ibb.co/zSTvgcK/beach-4.jpg')" }}
    >
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full rounded-none max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
              <button className="btn glass bg-indigo-500 text-white">
                <FaSignInAlt />
                Login
              </button>
            </div>
            <div className="text-center">
              <p>
                New here?{" "}
                <Link to={"/register"} className="text-blue-500 font-bold">
                  Register Now!
                </Link>
              </p>
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-neutral text-white rounded-full"
              >
                <FaGoogle className="text-lg" />
              </button>
              <button
                onClick={handleFacebookSignIn}
                className="btn btn-neutral text-white rounded-full"
              >
                <FaFacebook className="text-lg" />
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn btn-neutral text-white rounded-full"
              >
                <FaGithub className="text-lg" />
              </button>
            </div>
          </form>
          <div className="text-center pb-5">
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
