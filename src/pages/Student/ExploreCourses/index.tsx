import { useState } from "react";
import Layout from "../../../components/Layout";
import SelectFilter from "../../../components/ui/SelectFilter";
import CourseCard from "../../../components/ui/CourseCard";
import EmptyState from "../../../components/ui/EmptyState";
import type { ICourseCardData } from "../../../interfaces/CourseCard.interface";
import { IROUTES } from "../../../utils/constants/routes";
import { IoIosSearch } from "react-icons/io";
import SearchIcon from "@mui/icons-material/Search";

const availableCourses: ICourseCardData[] = [
  {
    id: 10,
    title: "Full Stack Web Development Bootcamp",
    instructor: "Alex Turner",
    category: "Development",
    rating: 4.9,
    ratingCount: 1250,
    studentsEnrolled: 8500,
    bannerImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    id: 11,
    title: "Digital Marketing Masterclass",
    instructor: "Jessica Brown",
    category: "Marketing",
    rating: 4.7,
    ratingCount: 890,
    studentsEnrolled: 5200,
    bannerImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    id: 12,
    title: "Data Analytics with Python",
    instructor: "David Kim",
    category: "Data Science",
    rating: 4.8,
    ratingCount: 670,
    studentsEnrolled: 4100,
    bannerImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    id: 13,
    title: "Graphic Design Fundamentals",
    instructor: "Maria Garcia",
    category: "Design",
    rating: 4.6,
    ratingCount: 520,
    studentsEnrolled: 3800,
    bannerImg: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800",
  },
  {
    id: 14,
    title: "Business Strategy & Management",
    instructor: "Robert Taylor",
    category: "Business",
    rating: 4.5,
    ratingCount: 340,
    studentsEnrolled: 2900,
    bannerImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
  },
  {
    id: 15,
    title: "Mobile App Development with React Native",
    instructor: "Chris Anderson",
    category: "Development",
    rating: 4.8,
    ratingCount: 780,
    studentsEnrolled: 6200,
    bannerImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
  },
  {
    id: 16,
    title: "Machine Learning A-Z",
    instructor: "Dr. Sarah Lee",
    category: "Data Science",
    rating: 4.9,
    ratingCount: 1100,
    studentsEnrolled: 7800,
    bannerImg: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },
  {
    id: 17,
    title: "UI/UX Design: From Wireframe to Prototype",
    instructor: "Emma Wilson",
    category: "Design",
    rating: 4.7,
    ratingCount: 450,
    studentsEnrolled: 3200,
    bannerImg: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
  },
  {
    id: 18,
    title: "Content Marketing Strategy",
    instructor: "Mark Johnson",
    category: "Marketing",
    rating: 4.4,
    ratingCount: 280,
    studentsEnrolled: 1900,
    bannerImg: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800",
  },
  {
    id: 19,
    title: "AWS Cloud Practitioner",
    instructor: "Kevin Zhang",
    category: "Development",
    rating: 4.8,
    ratingCount: 920,
    studentsEnrolled: 5600,
    bannerImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
  },
  {
    id: 20,
    title: "Financial Analysis & Modeling",
    instructor: "Jennifer Adams",
    category: "Business",
    rating: 4.6,
    ratingCount: 390,
    studentsEnrolled: 2400,
    bannerImg: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
  },
  {
    id: 21,
    title: "Deep Learning Specialization",
    instructor: "Dr. Andrew Ng",
    category: "Data Science",
    rating: 4.9,
    ratingCount: 2100,
    studentsEnrolled: 12000,
    bannerImg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
  },
];

const categories = ["All", "Development", "Design", "Data Science", "Marketing", "Business"];

const ExploreCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredCourses = availableCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || course.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <Layout parentPage={IROUTES.STUDENT_FIND_COURSES} pageHeading="Explore Courses" userType="student">
      <>
        <div className="my-4 sm:my-6 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white py-2.5 px-4 pl-10 text-sm w-full sm:w-80 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
            />
            <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
          <div className="flex gap-2 sm:gap-3">
            <SelectFilter
              label="Category"
              value={categoryFilter}
              options={categories}
              onChange={setCategoryFilter}
            />
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mb-4">
          Showing {filteredCourses.length} of {availableCourses.length} courses
        </p>

        {/* Course grid list */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                variant="explore"
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<SearchIcon sx={{ fontSize: 32, color: "#9ca3af" }} />}
            title="No courses found"
            description="We couldn't find any courses matching your search criteria. Try adjusting your filters or search terms."
          />
        )}
      </>
    </Layout>
  );
};

export default ExploreCourses;
