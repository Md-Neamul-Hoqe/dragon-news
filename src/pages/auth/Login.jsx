import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(e.currentTarget);

    const Form = new FormData(e.currentTarget);
    const email = Form.get("email");
    const photo = Form.get("photo");
    const password = Form.get("password");

    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  // console.log(user);
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

            <div className="form-control">
              {/* <Link> */}
              <button type="submit" className="btn btn-neutral w-full">
                Login
              </button>
              {/* </Link> */}
            </div>

            <div className="text-center py-7">
              <span>Don&apos;t have an account?</span>
              <Link to="/register" className="link link-hover text-red ps-2">
                Register
              </Link>
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Login;
