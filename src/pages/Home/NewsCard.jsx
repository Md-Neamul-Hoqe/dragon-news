import PropTypes from "prop-types";
import { useState } from "react";
import { FaBookmark, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Ratings from "../../Components/Ratings/Ratings";

const NewsCard = ({ news }) => {
  const [bookmark, setBookmark] = useState(false);

  const {
    _id,
    author,
    details,
    thumbnail_url,
    image_url,
    title,
    total_view,
    rating,
  } = news;

  const [ratings, setRatings] = useState(rating.number);

  const handleRatings = (rate) => {
    setRatings(rate);
  };
  return (
    <>
      <div className="card card-compact bg-base-100 space-y-5 my-3 border border-light-gray rounded-lg">
        <div className="flex justify-between py-5 bg-light text-gray rounded-t-lg">
          <div className="flex items-center gap-3 ps-3">
            <img
              className="rounded-full w-12"
              src={author.img}
              alt={author.name}
            />
            <div className="flex flex-col justify-start">
              <h5 className="text-dark">{author?.name}</h5>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pr-3">
            <span onClick={() => setBookmark(!bookmark)}>
              {bookmark ? <FaBookmark /> : <FaRegBookmark />}
            </span>{" "}
            <FaShareAlt />
          </div>
        </div>

        <h2 className="card-title font-bold text-xl px-3">{title}</h2>

        <figure className=" px-3">
          {image_url ? (
            <img src={image_url} alt={title} />
          ) : (
            <img src={thumbnail_url} alt={title} />
          )}
        </figure>

        <div className="px-3 text-gray">
          <p className="p-0">
            {details.length > 300 ? (
              <>
                {details.slice(0, 300) + "..."}{" "}
                <Link to={`/news/${_id}`} className="text-orange">
                  Read More
                </Link>
              </>
            ) : (
              details
            )}
          </p>
          <div className="card-actions flex justify-between py-5 px-3 border-t border-light-gray mt-5">
            <div className="flex items-center gap-2">
              <Ratings
                name={`rating-${_id}`}
                rating={ratings}
                handleRatings={handleRatings}
              />
              <span className="text-xl leading-8">{ratings}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEye /> <span>{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsCard;
