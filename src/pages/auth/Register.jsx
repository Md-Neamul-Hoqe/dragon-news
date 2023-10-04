import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const Form = new FormData(e.currentTarget);
    const email = Form.get("email");
    const name = Form.get("name");
    const photo = Form.get("photo");
    const password = Form.get("password");

    console.log(name, photo, email, password);

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="bg-base-200 font-poppins">
      <Navbar />
      <div className="hero min-h-screen">
        <div className="card w-full max-w-lg bg-white">
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-2xl text-center text-dark font-semibold">
              Login your account
            </h2>
            <hr className="my-5 text-light" />
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered bg-light mt-4 mb-6"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo link"
                className="input input-bordered bg-light mt-4 mb-6"
              />
            </div>
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
            <div className="form-control mt-6 flex flex-row gap-2 text-base">
              <input type="checkbox" name="check" id="check" required />{" "}
              <span className=" text-gray">Accept Terms & Conditions</span>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral w-full">
                Register
              </button>
            </div>
            <div className="form-control mt-6 flex flex-row gap-2 text-base">
              Already have an account?{" "}
              <Link className="text-info font-bold" to="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Register;
