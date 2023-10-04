import PropTypes from "prop-types";

const Ratings = ({ name, rating, handleRatings }) => {

  return (
    <div className="rating rating-md rating-half">
      <input
        type="radio"
        name={name}
        className="rating-hidden"
        value={rating}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-1"
        onChange={(e) => handleRatings(e.target.value)}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-1"
        onChange={(e) => handleRatings(e.target.value)}
        defaultChecked
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-1"
        onChange={(e) => handleRatings(e.target.value)}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-1"
        onChange={(e) => handleRatings(e.target.value)}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-1"
        onChange={(e) => handleRatings(e.target.value)}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-2"
      />
    </div>
  );
};

Ratings.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  handleRatings: PropTypes.func,
};

export default Ratings;
