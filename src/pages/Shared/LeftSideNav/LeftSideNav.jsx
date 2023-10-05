import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import news3Img from "../../../assets/3.png";
import { FaRegCalendar } from "react-icons/fa";
import moment from "moment";
import { AuthContext } from "../../../Providers/AuthProviders";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  const { categoryId, setCategoryId } = useContext(AuthContext);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
    {/* Categories */}
      <div id="categories">
        <h2 className="text-xl font-semibold leading-8 mb-5">All Categories</h2>
        {categories.map((category) => (
          <Link
            onClick={() => setCategoryId(`${category.id}`)}
            className={`block text-xl text-light-gray font-medium py-4 pl-12 hover:bg-ash hover:text-dark hover:font-semibold ${
              categoryId == category.id && "active"
            }`}
            key={category.id}>
            {category.name}
          </Link>
        ))}
      </div>

      {/* News */}
      <div id="sideNews" className="space-y-10 my-10">
        <div>
          <img src={news3Img} alt="" />
          <h4 className="text-dark font-semibold text-xl my-2">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h4>
          <div className="flex justify-between items-center">
            <span>Sports</span>
            <span className="flex gap-2 items-center">
              <FaRegCalendar /> {moment().format("ddd D, YYYY")}
            </span>
          </div>
        </div>
        <div>
          <img src={news3Img} alt="" />
          <h4 className="text-dark font-semibold text-xl my-2">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h4>
          <div className="flex justify-between items-center">
            <span>Sports</span>
            <span className="flex gap-2 items-center">
              <FaRegCalendar /> {moment().format("ddd D, YYYY")}
            </span>
          </div>
        </div>
        <div>
          <img src={news3Img} alt="" />
          <h4 className="text-dark font-semibold text-xl my-2">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h4>
          <div className="flex justify-between items-center">
            <span>Sports</span>
            <span className="flex gap-2 items-center">
              <FaRegCalendar /> {moment().format("ddd D, YYYY")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideNav;
