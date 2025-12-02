import Layout from "../../../components/Layout";
import { IROUTES } from "../../../utils/constants/routes";
import { Link } from "react-router";

const LessonDetails = () => {
  const lesson = {
    title: "Introduction to React Hooks",
    duration: "15:30",
    type: "video",
    content: `<p>In this lesson, you'll learn about React Hooks — useState, useEffect, and custom hooks.</p>`,
    videoUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
    pdfUrl: "#",
  };

  return (
    <Layout parentPage={IROUTES.COURSES}>
      <>
        <nav className="bg-sidebar flex items-center justify-between text-white px-6 py-4 -mx-8 -mt-8 relative z-10 mb-8 shadow-lg">
          <p className="font-medium">{lesson.title}</p>

          <div>
            <Link
              to={IROUTES.COURSES + `/edit/${5}`}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Edit
            </Link>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Lesson header */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">
              {lesson.title}
            </h1>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{lesson.duration}</span>
          </div>

          {/* Lesson type content */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            {lesson.type === "video" && (
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                <iframe
                  src={lesson.videoUrl}
                  title={lesson.title}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}

            {lesson.type === "pdf" && (
              <div className="mb-4">
                <a
                  href={lesson.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Download PDF
                </a>
              </div>
            )}

            {lesson.type === "text" && (
              <div
                className="prose max-w-full text-gray-700"
                dangerouslySetInnerHTML={{ __html: lesson.content }}
              />
            )}
          </div>
        </div>
      </>
    </Layout>
  );
};

export default LessonDetails;
