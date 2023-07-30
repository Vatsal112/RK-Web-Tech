import React from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
const StarRating = ({ value }) => {
  const MAX_STARS = 5;
  const filledStars = Math.floor(value);
  const decimalStar = value - filledStars;
  const emptyStars = MAX_STARS - filledStars - (decimalStar > 0 ? 1 : 0);

  return (
    <div>
      {[...Array(filledStars)].map((_, index) => (
        <BsStarFill key={index} style={{ color: "#fdb813" }} />
      ))}
      {decimalStar > 0 && <BsStarHalf style={{ color: "#fdb813" }} />}
      {[...Array(emptyStars)].map((_, index) => (
        <BsStar key={index} style={{ color: "#fdb813" }} />
      ))}
    </div>
  );
};

export default StarRating;
