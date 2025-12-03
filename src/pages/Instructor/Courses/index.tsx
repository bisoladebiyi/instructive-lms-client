import { useState } from "react";
import CourseCard from "../../../components/ui/CourseCard";
import type { ICourseCardData } from "../../../interfaces/CourseCard.interface";
import Layout from "../../../components/Layout";
import SelectFilter from "../../../components/ui/SelectFilter";
import EmptyState from "../../../components/ui/EmptyState";
import { IROUTES } from "../../../utils/constants/routes";
import { IoIosSearch } from "react-icons/io";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const visibilityOptions = ["All", "Public", "Private"];

const instructorCourses: ICourseCardData[] = [
  {
    id: 1,
    title: "Introduction to Node.js - A Beginner's Guide",
    instructor: "Abisola Adebiyi",
    category: "Development",
    rating: 4.5,
    ratingCount: 300,
    isPrivate: true,
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
  {
    id: 5,
    title: "MongoDB for Beginners",
    instructor: "Abisola Adebiyi",
    category: "Data Science",
    rating: 4.4,
    ratingCount: 190,
    isPrivate: false,
    bannerImg: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
  },
  {
    id: 6,
    title: "GraphQL Fundamentals",
    instructor: "Abisola Adebiyi",
    category: "Development",
    rating: 4.9,
    ratingCount: 340,
    isPrivate: true,
    bannerImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
  },
];

const Courses = () => {
  const [visibilityFilter, setVisibilityFilter] = useState("All");

  const filteredCourses = instructorCourses.filter((course) => {
    if (visibilityFilter === "All") return true;
    if (visibilityFilter === "Private") return course.isPrivate;
    if (visibilityFilter === "Public") return !course.isPrivate;
    return true;
  });

  return (
    <Layout parentPage={IROUTES.COURSES} pageHeading={"Courses"}>
      <>
        {/* search and filter  */}
        <div className="my-4 sm:my-6 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="relative">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search courses..."
              className="bg-white py-2.5 px-4 pl-10 text-sm w-full sm:w-80 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
            />
            <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
          <SelectFilter
            label="Show"
            value={visibilityFilter}
            options={visibilityOptions}
            onChange={setVisibilityFilter}
            minWidth={120}
          />
        </div>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredCourses.map((course) => (
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
            title="No courses found"
            description="You haven't created any courses yet. Start by creating your first course to share your knowledge with students."
            actionLabel="Create Course"
            actionLink={IROUTES.COURSE_CREATE}
          />
        )}
      </>
    </Layout>
  );
};

export default Courses;
