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
    <Link to={IROUTES.COURSES + `\\${id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100">
        <figure className="w-full overflow-hidden">
          <img
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            src={bannerImg}
            alt="course-banner"
          />
        </figure>
        <div className="p-4">
          <p className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2">{title}</p>
          <p className="text-xs text-gray-500 mb-3">{author}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-1.5 items-center">
              <span className="text-sm font-semibold text-amber-500">{rating}</span>
              <Rating
                name="read-only"
                value={rating}
                readOnly
                precision={0.5}
                size="small"
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "#f59e0b",
                  },
                }}
              />
              <span className="text-xs text-gray-400">({raters})</span>
            </div>
            {isPrivate && (
              <div className="flex items-center gap-1 text-gray-400" title="Private">
                <FaEyeSlash className="text-sm" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
