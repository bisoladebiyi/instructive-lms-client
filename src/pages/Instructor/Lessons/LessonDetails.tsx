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
        <nav className="bg-gray-800 flex items-center justify-between text-white p-3 py-5 -m-8 font-extralight relative z-10 border-b border-white/50 mb-10">
          <p>{lesson.title}</p>

          <div>
            <Link
              to={IROUTES.COURSES + `/edit/${5}`}
              className="underline text-xs mr-5 cursor-pointer"
            >
              Edit
            </Link>
          </div>
        </nav>
        <div className="max-w-4xl mx-auto p-8 space-y-6">
          {/* Lesson header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              {lesson.title}
            </h1>
            <span className="text-gray-500">{lesson.duration}</span>
          </div>

          {/* Lesson type content */}
          <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
            {lesson.type === "video" && (
              <div className="aspect-video w-full rounded-md overflow-hidden mb-4">
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
                  className="text-blue-600 underline"
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
