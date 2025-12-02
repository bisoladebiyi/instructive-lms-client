import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";
import { IROUTES } from "../../../utils/constants/routes";
import { LinearProgress } from "@mui/material";

const enrolledCourses = [
  {
    id: 1,
    title: "Introduction to Node.js - A Beginner's Guide",
    instructor: "Abisola Adebiyi",
    progress: 75,
    bannerImg: "https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd1436504d3891835d2fb7150a6feaee968abf4a5-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75",
  },
  {
    id: 2,
    title: "React Fundamentals - Building Modern UIs",
    instructor: "Sarah Johnson",
    progress: 45,
    bannerImg: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  },
  {
    id: 3,
    title: "Python for Data Science",
    instructor: "Michael Chen",
    progress: 90,
    bannerImg: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    instructor: "Emily Davis",
    progress: 20,
    bannerImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
  },
];

const EnrolledCourses = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-lg text-gray-900">Continue Learning</h2>
        <Link to={IROUTES.STUDENT_DASHBOARD}>
          <p className="flex items-center gap-1 text-primary-600 hover:text-primary-700 hover:gap-2 transition-all cursor-pointer text-sm font-medium">
            View all courses <IoIosArrowRoundForward className="text-lg" />
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100"
          >
            <figure className="w-full overflow-hidden relative">
              <img
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                src={course.bannerImg}
                alt={course.title}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <span className="text-white text-xs font-medium">{course.progress}% complete</span>
              </div>
            </figure>
            <div className="p-4">
              <p className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">{course.title}</p>
              <p className="text-xs text-gray-500 mb-3">{course.instructor}</p>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnrolledCourses;
