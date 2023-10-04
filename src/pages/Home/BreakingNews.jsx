import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex border rounded-none p-4 pr-24 bg-gray-50 text-black font-semibold leading-7 text-lg max-w-6xl mx-auto">
      <button className="btn mr-5 bg-red rounded-none text-white capitalize font-medium px-10 text-xl">
        Latest
      </button>
      <Marquee behavior={Marquee} direction="left" pauseOnHover speed={50} delay={2}>
        <Link className="px-2" to="/">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus</Link>
        <Link className="px-2" to="/">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus</Link>
        <Link className="px-2" to="/">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus</Link>
        <Link className="px-2" to="/">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
