import { Rating } from "@mui/material";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { IROUTES } from "../../utils/constants/routes";
import type { ICourseCard } from "../../interfaces/CourseCard.interface";

const CourseCard = ({
  title,
  author,
  rating,
  raters,
  bannerImg,
  isPrivate,
  id
}: ICourseCard) => {
  return (
    <Link to={IROUTES.COURSES + `\\${id}`}><div className="hover:scale-105 transition-transform cursor-pointer">
      <figure className="w-full mb-2">
        <img
          className="w-full h-40 object-cover"
          src={bannerImg}
          alt="course-banner"
        />
      </figure>
      <p className="text-base font-medium">{title}</p>
      <p className="text-xs text-gray-600 mt-2">{author}</p>
      <div className="flex justify-between items-center">
        <p className="flex gap-1 items-center">
          <span className="text-sm text-amber-400">{rating}</span>
          <Rating
            name="read-only"
            value={rating}
            readOnly
            precision={0.5}
            size="small"
          />
          <span className="text-[10px] text-gray-500">({raters})</span>
        </p>
       {isPrivate && <FaEyeSlash className="text-gray-400 text-sm" />}
      </div>
    </div>
    </Link>
  );
};

export default CourseCard;
