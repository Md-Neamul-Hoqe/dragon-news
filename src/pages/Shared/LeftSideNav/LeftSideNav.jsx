import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import news1Img from "../../../assets/1.png";
import news3Img from "../../../assets/3.png";
import { FaRegCalendar } from "react-icons/fa";
import moment from "moment";
import PropTypes from "prop-types";

const LeftSideNav = ({ activeCategory, handleActiveCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div id="categories">
        <h2 className="text-xl font-semibold leading-8 mb-5">All Categories</h2>
        {categories.map((category) => (
          <NavLink
            to={
              activeCategory == category.id ? "/" : `/category/${category.id}`
            }
            onClick={() => handleActiveCategory(category.id)}
            className="block text-xl text-light-gray font-medium py-4 pl-12 hover:bg-ash hover:text-dark hover:font-semibold"
            key={category.id}>
            {category.name}
          </NavLink>
        ))}
      </div>
      <div id="sideNews" className="space-y-10">
        <div>
          <img src={news1Img} alt="" />
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

LeftSideNav.propTypes = {
  handleActiveCategory: PropTypes.func.isRequired,
  activeCategory: PropTypes.string.isRequired,
};

export default LeftSideNav;
