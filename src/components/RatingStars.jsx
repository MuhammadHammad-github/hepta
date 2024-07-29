const Star = ({ filled }) => {
  return (
    <span
      style={{ color: filled ? "" : "" }}
      className={`text-lg ${filled ? " !text-teal-400" : "text-gray-400"}`}
    >
      ★
    </span>
  );
};

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};
export default StarRating;
