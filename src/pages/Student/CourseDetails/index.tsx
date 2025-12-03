import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import Layout from "../../../components/Layout";
import Button from "../../../components/ui/Button";
import ReusableAccordion from "../../../components/ui/Accordion";
import { IROUTES } from "../../../utils/constants/routes";
import { Rating, LinearProgress } from "@mui/material";
import { FaPlay, FaClock, FaBookOpen, FaCheck, FaLock } from "react-icons/fa6";

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
      { id: "1", title: "What is Node.js?", duration: "12:30", isCompleted: true, isPreview: true },
      { id: "2", title: "How Node.js works under the hood", duration: "18:45", isCompleted: true, isPreview: false },
      { id: "3", title: "Installing Node and npm", duration: "10:20", isCompleted: false, isPreview: false },
      { id: "4", title: "Your first Node.js script", duration: "15:00", isCompleted: false, isPreview: true },
    ],
  },
  {
    title: "Section 2: Core Concepts and Modules",
    lessons: [
      { id: "5", title: "Understanding the Event Loop", duration: "22:15", isCompleted: false, isPreview: false },
      { id: "6", title: "Working with Core Modules (fs, path, http)", duration: "25:30", isCompleted: false, isPreview: false },
      { id: "7", title: "Using npm and managing dependencies", duration: "14:00", isCompleted: false, isPreview: false },
      { id: "8", title: "Creating and exporting modules", duration: "16:45", isCompleted: false, isPreview: false },
    ],
  },
  {
    title: "Section 3: Building REST APIs with Express",
    lessons: [
      { id: "9", title: "Setting up Express.js", duration: "20:00", isCompleted: false, isPreview: false },
      { id: "10", title: "Handling routes and middleware", duration: "28:30", isCompleted: false, isPreview: false },
      { id: "11", title: "Connecting to a database", duration: "32:15", isCompleted: false, isPreview: false },
      { id: "12", title: "Building CRUD endpoints", duration: "35:00", isCompleted: false, isPreview: false },
    ],
  },
];

const checkEnrollmentStatus = (courseId: string) => {
  return parseInt(courseId) <= 3;
};

const StudentCourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const isEnrolled = checkEnrollmentStatus(courseId || "0");
  const [enrolling, setEnrolling] = useState(false);

  const getNextLesson = () => {
    for (const section of courseSections) {
      const nextLesson = section.lessons.find((l) => !l.isCompleted);
      if (nextLesson) return nextLesson.id;
    }
    return courseSections[0]?.lessons[0]?.id || "1";
  };

  // Progress calc
  const totalLessons = courseSections.reduce((acc, section) => acc + section.lessons.length, 0);
  const completedLessons = courseSections.reduce(
    (acc, section) => acc + section.lessons.filter((l) => l.isCompleted).length,
    0
  );
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  const handleEnroll = () => {
    setEnrolling(true);

    setTimeout(() => {
      setEnrolling(false);
    }, 1500);
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
        {section.lessons.map((lesson) => {
          const isClickable = isEnrolled || lesson.isPreview;
          const lessonContent = (
            <li
              key={lesson.id}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                isClickable ? "hover:bg-gray-50 cursor-pointer" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                {isEnrolled ? (
                  lesson.isCompleted ? (
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <FaCheck className="text-green-600 text-xs" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                      <FaPlay className="text-primary-600 text-xs" />
                    </div>
                  )
                ) : lesson.isPreview ? (
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <FaPlay className="text-primary-600 text-xs" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <FaLock className="text-gray-400 text-xs" />
                  </div>
                )}
                <span className={`text-sm ${!isEnrolled && !lesson.isPreview ? "text-gray-400" : "text-gray-700"}`}>
                  {lesson.title}
                </span>
                {!isEnrolled && lesson.isPreview && (
                  <span className="text-xs bg-primary-100 text-primary-600 px-2 py-0.5 rounded-full font-medium">
                    Preview
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-500">{lesson.duration}</span>
            </li>
          );

          if (isClickable) {
            return (
              <Link key={lesson.id} to={`/student/courses/${courseId}/lessons/${lesson.id}`}>
                {lessonContent}
              </Link>
            );
          }
          return <div key={lesson.id}>{lessonContent}</div>;
        })}
      </ul>
    ),
    defaultExpanded: true,
  }));

  return (
    <Layout parentPage={IROUTES.STUDENT_COURSES} userType="student" pageHeading="Course Details" hideHeadingOnDesktop>
      <>
        {/* Course Header */}
        <div className="bg-sidebar -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mb-6 sm:mb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Course Info */}
              <div className="flex-1 text-white order-2 lg:order-1">
                <h1 className="text-xl sm:text-2xl font-bold mb-3">{courseData.title}</h1>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{courseData.description}</p>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Rating value={courseData.rating} readOnly precision={0.5} size="small" sx={{ "& .MuiRating-iconFilled": { color: "#fbbf24" } }} />
                    <span className="text-amber-400 font-medium">{courseData.rating}</span>
                    <span className="text-gray-400">({courseData.ratingCount})</span>
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

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaClock /> {courseData.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBookOpen /> {courseData.totalLessons} lessons
                  </span>
                  <span className="hidden sm:inline">Last updated {courseData.lastUpdated}</span>
                </div>

                {/* Progress bar */}
                {isEnrolled && (
                  <div className="mt-5">
                    <div className="flex justify-between text-xs text-gray-300 mb-2">
                      <span>Your progress</span>
                      <span>{progressPercent}% complete</span>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={progressPercent}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "rgba(255,255,255,0.2)",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: progressPercent === 100 ? "#10b981" : "#818cf8",
                          borderRadius: 4,
                        },
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Course Banner */}
              <div className="w-full lg:w-80 shrink-0 order-1 lg:order-2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={courseData.bannerUrl}
                    alt={courseData.title}
                    className="w-full h-40 sm:h-44 object-cover"
                  />
                  <div className="bg-white p-4">
                    {isEnrolled ? (
                      <Button
                        text="Continue Learning"
                        className="w-full justify-center"
                        onClick={() => navigate(`/student/courses/${courseId}/lessons/${getNextLesson()}`)}
                      />
                    ) : (
                      <Button
                        text={enrolling ? "Enrolling..." : "Enroll Now"}
                        className="w-full justify-center"
                        onClick={handleEnroll}
                      />
                    )}
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
              <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 mb-6">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">What you'll learn</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Course Content</h2>
                <ReusableAccordion items={accordionItems} />
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default StudentCourseDetails;
