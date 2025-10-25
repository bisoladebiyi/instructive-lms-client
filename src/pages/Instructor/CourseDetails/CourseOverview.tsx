import { Rating } from "@mui/material";
import { course } from "../../../utils/constants/dummy";

const CourseOverview = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-0 space-y-6">
      {/* Banner */}
      <div className="w-full h-64 rounded-2xl overflow-hidden shadow">
        <img
          src={course.bannerUrl}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Meta */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <img
              src={course.instructor.avatarUrl}
              alt={course.instructor.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>{course.instructor.name}</span>
          </div>
          <span>• {course.duration}</span>
          <span>• {course.lessons} lessons</span>
          <div className="flex items-center gap-1">
            <Rating
              name="read-only"
              value={course.rating}
              readOnly
              precision={0.5}
              size="small"
            />
            <span>{course.rating}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: course.description }}
      ></p>
    </div>
  );
};

export default CourseOverview;
