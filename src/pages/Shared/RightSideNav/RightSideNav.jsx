import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import addBg from "../../../assets/bg1.png";
// import addBgOpacity from "../../../assets/bg.png";

import { Link } from "react-router-dom";

const RightSideNav = () => {
  return (
    <aside>
      <div className="p-4 mb-8">
        <h2 className="text-3xl mb-5">Login With</h2>
        <button className="btn btn-accent btn-outline mb-3 w-full">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-neutral btn-outline mb-3 w-full">
          <FaGithub />
          Login With Github
        </button>
      </div>
      <div className="p-4 mb-8">
        <h2 className="text-3xl mb-5">Find Us On</h2>
        <Link
          to="/"
          className="p-4 flex text-lg items-center rounded-t-lg border-2 border-light">
          <FaFacebook />
          <span className="ms-3">Facebook</span>
        </Link>
        <Link
          to="/"
          className="p-4 flex text-lg items-center rounded-none border-x-2 border-light">
          <FaTwitter />
          <span className="ms-3">Twitter</span>
        </Link>
        <Link
          to="/"
          className="p-4 flex text-lg items-center rounded-b-lg border-2 border-light">
          <FaInstagram />
          <span className="ms-3">Instagram</span>
        </Link>
      </div>
      <div className="p-4 mb-8 bg-light">
        <h2 className="text-3xl mb-5">Q-Zone</h2>
        <img className="w-full" src={qZone1} alt="" />
        <img className="w-full" src={qZone2} alt="" />
        <img className="w-full" src={qZone3} alt="" />
      </div>
      <div>
        <img className="rounded-none w-full" src={addBg} alt="" />
      </div>
    </aside>
  );
};

export default RightSideNav;
