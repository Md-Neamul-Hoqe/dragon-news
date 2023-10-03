import PropTypes from "prop-types";
import { FaBookmark, FaEye, FaShare, FaShareAlt } from "react-icons/fa";
const DetailsNews = ({ news }) => {
  const {
    author,
    details,
    thumbnail_url,
    image_url,
    title,
    total_view,
    category_id,
    rating,
  } = news;
  //   console.log(news);
  return (
    <>
      <div className="card card-compact bg-base-100 space-y-5 my-3">
        <div className="flex justify-between py-5 px-3 bg-light text-gray">
          <div className="flex items-center gap-3 px-3">
            <img
              className="rounded-full w-12"
              src={author.img}
              alt={author.name}
            />
            <div className="flex flex-col justify-start">
              <h5 className="text-dark">{author.name}</h5>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaBookmark /> <FaShareAlt />
          </div>
        </div>

        <h2 className="card-title font-bold text-xl">{title}</h2>

        <figure>
          <img src={image_url} alt={title} />
        </figure>

        <div className="px-0 text-gray">
          <p className="p-0">
            {details.slice(0, 300) + "..."}{" "}
            <span className="text-orange">Read More</span>
          </p>
          <div className="card-actions flex justify-between py-10 px-3 bg-light">
            <div className="flex items-center gap-2">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange"
                />
              </div>
              <span className="text-xl leading-8">{rating.number}</span>
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

DetailsNews.propTypes = {
  news: PropTypes.object.isRequired,
};

export default DetailsNews;
