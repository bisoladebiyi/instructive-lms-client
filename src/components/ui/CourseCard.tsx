import { Link } from "react-router";
import { LinearProgress, Rating } from "@mui/material";
import { FaEyeSlash } from "react-icons/fa";
import { IROUTES } from "../../utils/constants/routes";
import type { ICourseCardProps } from "../../interfaces/CourseCard.interface";

const CourseCard = ({ course, variant = "enrolled" }: ICourseCardProps) => {
  const isEnrolled = variant === "enrolled";
  const isInstructor = variant === "instructor";

  const linkTo = isInstructor
    ? `${IROUTES.COURSES}/${course.id}`
    : `${IROUTES.STUDENT_COURSES}/${course.id}`;

  return (
    <Link to={linkTo}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100 h-full flex flex-col">
        <figure className="w-full overflow-hidden relative">
          <img
            className={`w-full ${isInstructor ? "h-40" : "h-36"} object-cover group-hover:scale-105 transition-transform duration-300`}
            src={course.bannerImg}
            alt={course.title}
          />
          {isEnrolled && course.progress !== undefined && (
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-3">
              <span className="text-white text-xs font-medium">
                {course.progress}% complete
              </span>
            </div>
          )}
          {course.category && (
            <span className="absolute top-2 right-2 bg-white/90 text-xs px-2 py-1 rounded-full text-gray-700 font-medium">
              {course.category}
            </span>
          )}
        </figure>
        <div className="p-4 flex-1 flex flex-col">
          <p className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
            {course.title}
          </p>
          <p className="text-xs text-gray-500 mb-3">{course.instructor}</p>

          {isEnrolled && course.progress !== undefined ? (
            <div className="mt-auto">
              <LinearProgress
                variant="determinate"
                value={course.progress}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "#e5e7eb",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: course.progress === 100 ? "#10b981" : "#4f46e5",
                    borderRadius: 3,
                  },
                }}
              />
            </div>
          ) : (
            <div className="mt-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold text-amber-500">
                    {course.rating?.toFixed(1)}
                  </span>
                  <Rating
                    value={course.rating || 0}
                    readOnly
                    precision={0.5}
                    size="small"
                    sx={{ "& .MuiRating-iconFilled": { color: "#f59e0b" } }}
                  />
                  {course.ratingCount && (
                    <span className="text-xs text-gray-400">
                      ({course.ratingCount})
                    </span>
                  )}
                </div>
                {isInstructor && course.isPrivate && (
                  <div className="flex items-center gap-1 text-gray-400" title="Private">
                    <FaEyeSlash className="text-sm" />
                  </div>
                )}
              </div>
              {!isInstructor && course.studentsEnrolled && (
                <p className="text-xs text-gray-400 mt-1">
                  {course.studentsEnrolled.toLocaleString()} students
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
