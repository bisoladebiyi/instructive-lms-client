import { IoIosArrowRoundForward } from "react-icons/io";
import CourseCard from "../../../components/ui/CourseCard";
import EmptyState from "../../../components/ui/EmptyState";
import { Link } from "react-router";
import { IROUTES } from "../../../utils/constants/routes";
import type { ICourseCardData } from "../../../interfaces/CourseCard.interface";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const recentCourses: ICourseCardData[] = [
  {
    id: 1,
    title: "Introduction to Node.js - A Beginner's Guide",
    instructor: "Abisola Adebiyi",
    category: "Development",
    rating: 4.5,
    ratingCount: 300,
    isPrivate: false,
    bannerImg: "https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd1436504d3891835d2fb7150a6feaee968abf4a5-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    instructor: "Abisola Adebiyi",
    category: "Development",
    rating: 4.8,
    ratingCount: 450,
    isPrivate: false,
    bannerImg: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  },
  {
    id: 3,
    title: "TypeScript Masterclass",
    instructor: "Abisola Adebiyi",
    category: "Development",
    rating: 4.7,
    ratingCount: 280,
    isPrivate: true,
    bannerImg: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
  },
  {
    id: 4,
    title: "Building REST APIs with Express",
    instructor: "Abisola Adebiyi",
    category: "Development",
    rating: 4.6,
    ratingCount: 520,
    isPrivate: false,
    bannerImg: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
  },
];

const Courses = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-lg text-gray-900">Recently Published</h2>
        <Link to={IROUTES.COURSES}>
          <p className="flex items-center gap-1 text-primary-600 hover:text-primary-700 hover:gap-2 transition-all cursor-pointer text-sm font-medium">
            View all <IoIosArrowRoundForward className="text-lg" />
          </p>
        </Link>
      </div>
      {recentCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {recentCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              variant="instructor"
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<MenuBookIcon sx={{ fontSize: 32, color: "#9ca3af" }} />}
          title="No courses yet"
          description="Create your first course to start sharing your knowledge."
          actionLabel="Create Course"
          actionLink={IROUTES.COURSE_CREATE}
        />
      )}
    </section>
  );
};

export default Courses;
