import { useParams, Link } from "react-router";
import Layout from "../../../components/Layout";
import Button from "../../../components/ui/Button";
import ReusableAccordion from "../../../components/ui/Accordion";
import { IROUTES } from "../../../utils/constants/routes";
import { Rating } from "@mui/material";
import { FaPlay, FaClock, FaBookOpen, FaCheck, FaPen } from "react-icons/fa6";

// Dummy data
const courseData = {
  id: 1,
  title: "Introduction to Node.js - A Beginner's Guide",
  description: `This Introduction to Node.js course is designed for complete beginners who want to learn how to build fast, scalable server-side applications using JavaScript. By the end of this course, you'll have built several small projects and a full-fledged REST API you can proudly showcase in your portfolio.`,
  bannerUrl:
    "https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd1436504d3891835d2fb7150a6feaee968abf4a5-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75",
  instructor: {
    name: "Abisola Adebiyi",
    avatarUrl: "https://avatar.iran.liara.run/public/job/teacher/male",
  },
  duration: "8h 30m",
  totalLessons: 24,
  rating: 4.8,
  ratingCount: 342,
  studentsEnrolled: 1250,
  lastUpdated: "November 2024",
  isPublished: false,
  category: "Development",
  whatYouWillLearn: [
    "Understand how Node.js works under the hood",
    "Set up your local development environment",
    "Work with modules, NPM, and third-party libraries",
    "Build RESTful APIs with Express.js",
    "Connect your backend to databases like MySQL or MongoDB",
  ],
};

const courseSections = [
  {
    title: "Section 1: Getting Started with Node.js",
    lessons: [
      { id: "1", title: "What is Node.js?", duration: "12:30" },
      { id: "2", title: "How Node.js works under the hood", duration: "18:45" },
      { id: "3", title: "Installing Node and npm", duration: "10:20" },
      { id: "4", title: "Your first Node.js script", duration: "15:00" },
    ],
  },
  {
    title: "Section 2: Core Concepts and Modules",
    lessons: [
      { id: "5", title: "Understanding the Event Loop", duration: "22:15" },
      { id: "6", title: "Working with Core Modules (fs, path, http)", duration: "25:30" },
      { id: "7", title: "Using npm and managing dependencies", duration: "14:00" },
      { id: "8", title: "Creating and exporting modules", duration: "16:45" },
    ],
  },
  {
    title: "Section 3: Building REST APIs with Express",
    lessons: [
      { id: "9", title: "Setting up Express.js", duration: "20:00" },
      { id: "10", title: "Handling routes and middleware", duration: "28:30" },
      { id: "11", title: "Connecting to a database", duration: "32:15" },
      { id: "12", title: "Building CRUD endpoints", duration: "35:00" },
    ],
  },
];

const InstructorCourseDetails = () => {
  const { courseId } = useParams();

  const handlePublish = () => {
    console.log("Publishing course:", courseId);
  };

  const accordionItems = courseSections.map((section) => ({
    title: (
      <div className="flex justify-between items-center w-full pr-4">
        <span>{section.title}</span>
        <span className="text-xs text-gray-500 font-normal">{section.lessons.length} lessons</span>
      </div>
    ),
    content: (
      <ul className="space-y-1">
        {section.lessons.map((lesson) => (
          <Link key={lesson.id} to={`/instructor/courses/${courseId}/lessons/${lesson.id}`}>
            <li className="flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                  <FaPlay className="text-primary-600 text-xs" />
                </div>
                <span className="text-sm text-gray-700">{lesson.title}</span>
              </div>
              <span className="text-xs text-gray-500">{lesson.duration}</span>
            </li>
          </Link>
        ))}
      </ul>
    ),
    defaultExpanded: true,
  }));

  return (
    <Layout parentPage={IROUTES.COURSES}>
      <>
        <div className="bg-sidebar -mx-8 -mt-8 px-8 py-8 mb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-8">
              {/* Course Info */}
              <div className="flex-1 text-white">
                {/* Status badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    courseData.isPublished
                      ? "bg-green-500/20 text-green-300"
                      : "bg-amber-500/20 text-amber-300"
                  }`}>
                    {courseData.isPublished ? "Published" : "Draft"}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                    {courseData.category}
                  </span>
                </div>

                <h1 className="text-2xl font-bold mb-3">{courseData.title}</h1>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{courseData.description}</p>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Rating value={courseData.rating} readOnly precision={0.5} size="small" sx={{ "& .MuiRating-iconFilled": { color: "#fbbf24" } }} />
                    <span className="text-amber-400 font-medium">{courseData.rating}</span>
                    <span className="text-gray-400">({courseData.ratingCount} ratings)</span>
                  </div>
                  <span className="text-gray-400">{courseData.studentsEnrolled.toLocaleString()} students</span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={courseData.instructor.avatarUrl}
                    alt={courseData.instructor.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-300 text-sm">Created by {courseData.instructor.name}</span>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaClock /> {courseData.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBookOpen /> {courseData.totalLessons} lessons
                  </span>
                  <span>Last updated {courseData.lastUpdated}</span>
                </div>
              </div>

              {/* Course Banner */}
              <div className="w-80 shrink-0">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={courseData.bannerUrl}
                    alt={courseData.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="bg-white p-4 space-y-2">
                    <Button
                      text={courseData.isPublished ? "Unpublish" : "Publish Course"}
                      className="w-full justify-center"
                      onClick={handlePublish}
                    />
                    <Link to={`/instructor/courses/edit/${courseId}`}>
                      <button className="w-full flex items-center justify-center gap-2 py-2.5 px-5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 cursor-pointer">
                        <FaPen className="text-xs" /> Edit Course
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8">
            <div className="flex-1">
              {/* What you'll learn */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">What students will learn</h2>
                <ul className="grid grid-cols-2 gap-3">
                  {courseData.whatYouWillLearn.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheck className="text-green-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curriculum */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Course Content</h2>
                  <Link to={`/instructor/courses/${courseId}/lessons/create`}>
                    <button className="text-sm text-primary-600 hover:text-primary-700 font-medium cursor-pointer">
                      + Add Lesson
                    </button>
                  </Link>
                </div>
                <ReusableAccordion items={accordionItems} />
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default InstructorCourseDetails;
