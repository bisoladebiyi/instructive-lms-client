import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";
import { IROUTES } from "../../../utils/constants/routes";
import CourseCard from "../../../components/ui/CourseCard";
import EmptyState from "../../../components/ui/EmptyState";
import type { ICourseCardData } from "../../../interfaces/CourseCard.interface";
import SchoolIcon from "@mui/icons-material/School";

const enrolledCourses: ICourseCardData[] = [
  {
    id: 1,
    title: "Introduction to Node.js - A Beginner's Guide",
    instructor: "Abisola Adebiyi",
    progress: 75,
    category: "Development",
    bannerImg: "https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd1436504d3891835d2fb7150a6feaee968abf4a5-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75",
  },
  {
    id: 2,
    title: "React Fundamentals - Building Modern UIs",
    instructor: "Sarah Johnson",
    progress: 45,
    category: "Development",
    bannerImg: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  },
  {
    id: 3,
    title: "Python for Data Science",
    instructor: "Michael Chen",
    progress: 90,
    category: "Data Science",
    bannerImg: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    instructor: "Emily Davis",
    progress: 20,
    category: "Design",
    bannerImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
  },
];

const EnrolledCourses = () => {
  return (
    <section className="mt-8 sm:mt-10">
      <div className="flex justify-between items-center mb-4 sm:mb-5">
        <h2 className="font-semibold text-base sm:text-lg text-gray-900">Continue Learning</h2>
        <Link to={IROUTES.STUDENT_COURSES}>
          <p className="flex items-center gap-1 text-primary-600 hover:text-primary-700 hover:gap-2 transition-all cursor-pointer text-xs sm:text-sm font-medium">
            View all <IoIosArrowRoundForward className="text-lg" />
          </p>
        </Link>
      </div>
      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {enrolledCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              variant="enrolled"
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<SchoolIcon sx={{ fontSize: 32, color: "#9ca3af" }} />}
          title="No courses yet"
          description="Start your learning journey by enrolling in a course."
          actionLabel="Explore Courses"
          actionLink={IROUTES.STUDENT_FIND_COURSES}
        />
      )}
    </section>
  );
};

export default EnrolledCourses;
