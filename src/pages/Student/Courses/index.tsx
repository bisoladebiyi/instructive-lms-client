import { useState } from "react";
import Layout from "../../../components/Layout";
import SelectFilter from "../../../components/ui/SelectFilter";
import CourseCard from "../../../components/ui/CourseCard";
import type { ICourseCardData } from "../../../interfaces/CourseCard.interface";
import { IROUTES } from "../../../utils/constants/routes";
import { IoIosSearch } from "react-icons/io";

const enrolledCourses: ICourseCardData[] = [
  {
    id: 1,
    title: "Introduction to Node.js - A Beginner's Guide",
    instructor: "Abisola Adebiyi",
    progress: 75,
    category: "Development",
    bannerImg:
      "https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd1436504d3891835d2fb7150a6feaee968abf4a5-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75",
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
  {
    id: 5,
    title: "Advanced JavaScript Concepts",
    instructor: "James Wilson",
    progress: 100,
    category: "Development",
    bannerImg: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800",
  },
  {
    id: 6,
    title: "Machine Learning Fundamentals",
    instructor: "Lisa Wang",
    progress: 60,
    category: "Data Science",
    bannerImg: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
  },
];

const categories = ["All", "Development", "Design", "Data Science"];
const progressFilters = ["All", "In Progress", "Completed", "Not Started"];

const StudentCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [progressFilter, setProgressFilter] = useState("All");

  const filteredCourses = enrolledCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || course.category === categoryFilter;

    const matchesProgress =
      progressFilter === "All" ||
      (progressFilter === "Completed" && course.progress === 100) ||
      (progressFilter === "In Progress" && course.progress! > 0 && course.progress! < 100) ||
      (progressFilter === "Not Started" && course.progress === 0);

    return matchesSearch && matchesCategory && matchesProgress;
  });

  return (
    <Layout parentPage={IROUTES.STUDENT_COURSES} pageHeading="My Courses" userType="student">
      <>
        <div className="my-6 flex flex-wrap justify-between items-center gap-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white py-2.5 px-4 pl-10 text-sm w-80 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
            />
            <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
          <div className="flex gap-3">
            <SelectFilter
              label="Category"
              value={categoryFilter}
              options={categories}
              onChange={setCategoryFilter}
            />
            <SelectFilter
              label="Progress"
              value={progressFilter}
              options={progressFilters}
              onChange={setProgressFilter}
            />
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Showing {filteredCourses.length} of {enrolledCourses.length} courses
        </p>

        {/* Course grid list */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-4 gap-5">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                variant="enrolled"
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No courses found matching your criteria.</p>
          </div>
        )}
      </>
    </Layout>
  );
};

export default StudentCourses;
