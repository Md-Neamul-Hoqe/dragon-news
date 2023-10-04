import PropTypes from "prop-types";

/**
 * Creating component of rating for each card where it is called
 * @param {string} name `name` of the input fields
 * @param {number} rating numerical value of the ratings
 * @param {func} handleRatings used to set the ratings in numerical value
 * @returns Ratings Component of each card
 */
const Ratings = ({ name, rating, handleRatings }) => {
  return (
    <div className="rating rating-md rating-half" defaultChecked={rating}>
      <input type="radio" name={name} className="rating-hidden" />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-1"
        onChange={() => handleRatings(0.5)}
        checked={rating === 0.5 && true}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-2"
        onChange={() => handleRatings(1)}
        checked={rating === 1 && true}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-1"
        onChange={() => handleRatings(1.5)}
        checked={rating === 1.5 && true}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-2"
        onChange={() => handleRatings(2)}
        checked={rating === 2 && true}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-1"
        onChange={() => handleRatings(2.5)}
        checked={rating === 2.5 && true}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-2"
        onChange={() => handleRatings(3)}
        checked={rating === 3 && true}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-1"
        onChange={() => handleRatings(3.5)}
        checked={rating === 3.5 && true}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-2"
        onChange={() => handleRatings(4)}
        checked={rating === 4 && true}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-1"
        onChange={() => handleRatings(4.5)}
        checked={rating === 4.5 && true}
      />
      <input
        type="radio"
        name={name}
        className="bg-orange mask mask-star-2 mask-half-2"
        onChange={() => handleRatings(5)}
        checked={rating === 5 && true}
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
