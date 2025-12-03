import { useParams, Link, useNavigate } from "react-router";
import Layout from "../../../components/Layout";
import Button from "../../../components/ui/Button";
import { IROUTES } from "../../../utils/constants/routes";
import { FaCheck, FaPlay, FaChevronLeft, FaList } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa";
import { LinearProgress } from "@mui/material";
import type { ILesson } from "../../../interfaces/Lesson.interface";

// Dummy data
const lessonsData: Record<string, ILesson> = {
  "1": {
    id: "1",
    title: "What is Node.js?",
    duration: "12:30",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4",
    isCompleted: true,
  },
  "2": {
    id: "2",
    title: "How Node.js works under the hood",
    duration: "18:45",
    type: "text",
    textContent: `
      <h2>Understanding the Node.js Architecture</h2>
      <p>Node.js is built on Chrome's V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.</p>

      <h3>The Event Loop</h3>
      <p>The event loop is what allows Node.js to perform non-blocking I/O operations — despite JavaScript being single-threaded — by offloading operations to the system kernel whenever possible.</p>

      <h3>Key Components</h3>
      <ul>
        <li><strong>V8 Engine:</strong> Compiles JavaScript to native machine code</li>
        <li><strong>libuv:</strong> Provides the event loop and async I/O</li>
        <li><strong>Core Modules:</strong> Built-in modules like fs, http, path</li>
      </ul>

      <h3>Why Non-Blocking?</h3>
      <p>Traditional synchronous programming blocks execution until an operation completes. Node.js uses callbacks, promises, and async/await to handle operations without blocking the main thread.</p>

      <pre><code>// Example of non-blocking code
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('This runs before file is read!');</code></pre>
    `,
    isCompleted: true,
  },
  "3": {
    id: "3",
    title: "Installing Node and npm",
    duration: "10:20",
    type: "pdf",
    pdfUrl: "https://nodejs.org/dist/latest/docs/api/all.pdf",
    isCompleted: false,
  },
  "4": {
    id: "4",
    title: "Your first Node.js script",
    duration: "15:00",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4",
    isCompleted: false,
  },
  "5": {
    id: "5",
    title: "Understanding the Event Loop",
    duration: "22:15",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/8aGhZQkoFbQ",
    isCompleted: false,
  },
};

// Dummy course sections with lessons for sidebar
const courseSections = [
  {
    title: "Section 1: Getting Started",
    lessons: [
      { id: "1", title: "What is Node.js?", duration: "12:30", isCompleted: true },
      { id: "2", title: "How Node.js works under the hood", duration: "18:45", isCompleted: true },
      { id: "3", title: "Installing Node and npm", duration: "10:20", isCompleted: false },
      { id: "4", title: "Your first Node.js script", duration: "15:00", isCompleted: false },
    ],
  },
  {
    title: "Section 2: Core Concepts",
    lessons: [
      { id: "5", title: "Understanding the Event Loop", duration: "22:15", isCompleted: false },
      { id: "6", title: "Working with Core Modules", duration: "25:30", isCompleted: false },
      { id: "7", title: "Using npm and dependencies", duration: "14:00", isCompleted: false },
      { id: "8", title: "Creating and exporting modules", duration: "16:45", isCompleted: false },
    ],
  },
];

const allLessonIds = courseSections.flatMap((s) => s.lessons.map((l) => l.id));

const StudentLesson = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = lessonsData[lessonId || "1"];

  const totalLessons = allLessonIds.length;
  const completedLessons = courseSections.reduce(
    (acc, section) => acc + section.lessons.filter((l) => l.isCompleted).length,
    0
  );
  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  const currentIndex = allLessonIds.indexOf(lessonId || "1");
  const prevLessonId = currentIndex > 0 ? allLessonIds[currentIndex - 1] : null;
  const nextLessonId = currentIndex < allLessonIds.length - 1 ? allLessonIds[currentIndex + 1] : null;

  const navigateToLesson = (id: string) => {
    navigate(`/student/courses/${courseId}/lessons/${id}`);
  };

  const handleMarkComplete = () => {
    console.log("Marking lesson as complete:", lessonId);
  };

  if (!lesson) {
    return (
      <Layout parentPage={IROUTES.STUDENT_COURSES} userType="student">
        <div className="text-center py-12">
          <p className="text-gray-500">Lesson not found</p>
          <Link to={`/student/courses/${courseId}`} className="text-primary-600 hover:underline mt-4 inline-block">
            Back to course
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout parentPage={IROUTES.STUDENT_COURSES} userType="student">
      <div className="flex gap-6 -mt-2">
        {/* Main Content */}
        <div className="flex-1">
          {/* Lesson Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Link
                to={`/student/courses/${courseId}`}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FaChevronLeft />
              </Link>
              <h1 className="text-xl font-bold text-gray-900">{lesson.title}</h1>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {lesson.duration}
            </span>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            {/* Video Content */}
            {lesson.type === "video" && lesson.videoUrl && (
              <div className="aspect-video w-full">
                <iframe
                  src={lesson.videoUrl}
                  title={lesson.title}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full"
                />
              </div>
            )}

            {/* Text Content */}
            {lesson.type === "text" && lesson.textContent && (
              <div className="p-6">
                <div
                  className="prose prose-sm max-w-none text-gray-700
                    prose-headings:text-gray-900 prose-headings:font-semibold
                    prose-h2:text-xl prose-h2:mt-0 prose-h2:mb-4
                    prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                    prose-p:mb-4 prose-p:leading-relaxed
                    prose-ul:my-4 prose-li:my-1
                    prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4
                    prose-code:text-primary-600 prose-code:bg-primary-50 prose-code:px-1 prose-code:rounded
                    prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: lesson.textContent }}
                />
              </div>
            )}

            {/* PDF Content */}
            {lesson.type === "pdf" && lesson.pdfUrl && (
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                  <FaFilePdf className="text-red-500 text-3xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">PDF Document</h3>
                <p className="text-gray-500 text-sm mb-6">
                  This lesson contains a PDF document. Click below to view or download.
                </p>
                <div className="flex gap-3 justify-center">
                  <a
                    href={lesson.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200"
                  >
                    View PDF
                  </a>
                  <a
                    href={lesson.pdfUrl}
                    download
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200"
                  >
                    Download
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Lesson Actions */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-3">
              {prevLessonId && (
                <button
                  onClick={() => navigateToLesson(prevLessonId)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors cursor-pointer"
                >
                  <FaChevronLeft className="text-xs" /> Previous
                </button>
              )}
            </div>

            <div className="flex gap-3">
              {!lesson.isCompleted && (
                <Button
                  text="Mark as Complete"
                  onClick={handleMarkComplete}
                  className="bg-green-600 hover:bg-green-700"
                />
              )}
              {nextLessonId && (
                <Button
                  text="Next Lesson"
                  onClick={() => navigateToLesson(nextLessonId)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="w-80 shrink-0">
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden sticky top-6">
            {/* Progress Header */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <FaList className="text-gray-500" />
                <span className="font-semibold text-gray-900 text-sm">Course Content</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{completedLessons} of {totalLessons} lessons</span>
                <span>{progressPercent}%</span>
              </div>
              <LinearProgress
                variant="determinate"
                value={progressPercent}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "#e5e7eb",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: progressPercent === 100 ? "#10b981" : "#4f46e5",
                    borderRadius: 3,
                  },
                }}
              />
            </div>

            <div className="max-h-[calc(100vh-250px)] overflow-y-auto">
              {courseSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    {section.title}
                  </div>
                  <ul>
                    {section.lessons.map((sectionLesson) => {
                      const isActive = sectionLesson.id === lessonId;
                      return (
                        <li key={sectionLesson.id}>
                          <button
                            onClick={() => navigateToLesson(sectionLesson.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                              isActive
                                ? "bg-primary-50 border-l-2 border-primary-600"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            {sectionLesson.isCompleted ? (
                              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                <FaCheck className="text-green-600 text-xs" />
                              </div>
                            ) : (
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                                isActive ? "bg-primary-100" : "bg-gray-100"
                              }`}>
                                <FaPlay className={`text-xs ${isActive ? "text-primary-600" : "text-gray-400"}`} />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm truncate ${
                                isActive ? "text-primary-700 font-medium" : "text-gray-700"
                              }`}>
                                {sectionLesson.title}
                              </p>
                              <p className="text-xs text-gray-400">{sectionLesson.duration}</p>
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentLesson;
