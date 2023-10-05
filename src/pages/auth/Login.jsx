import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { signIn, createUser, error, setError } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // console.log(e.currentTarget);

    const Form = new FormData(e.currentTarget);
    const email = Form.get("email");
    // const photo = Form.get("photo");
    const password = Form.get("password");

    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        createUser(result.user);

        /* navigate after login */
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setError(error));
  };

  return (
    <section className="bg-base-200">
      <Navbar />
      <div className="hero min-h-screen">
        <div className="card w-full max-w-lg bg-white">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-2xl text-center text-dark font-semibold">
              Login your account
            </h2>

            <hr className="my-5 text-light" />

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered bg-light mt-4 mb-6"
                required
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered bg-light mt-4 mb-6"
                required
              />
            </div>

            {/* submit button */}
            <div className="form-control">
              <button type="submit" className="btn btn-neutral w-full">
                Login
              </button>
            </div>

            {/* go to register page */}
            <div className="text-center py-7">
              <span>Don&apos;t have an account?</span>
              <Link to="/register" className="link link-hover text-red ps-2">
                Register
              </Link>
            </div>
            {error && (
              <div>
                <p>{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
