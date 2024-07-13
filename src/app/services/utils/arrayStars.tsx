import { Fragment } from "react";
import { FaStar } from "react-icons/fa";
const StarRating = (rate: number | any) => {
  const totalStar = 5;
  const stars = [];
  for (let i = 0; i < totalStar; i++) {
    stars.push(
      <FaStar
        key={i}
        className={i < Math.round(rate) ? "text-yellow-500" : "text-yellow-400"}
      />
    );
  }
  return <Fragment>{stars}</Fragment>;
};
export default StarRating;
