import { useId, useState } from "react";
import Layout from "../../../components/Layout";
import { IROUTES } from "../../../utils/constants/routes";
import Wysiwyg from "../../../components/ui/Wysiwyg";
import Input from "../../../components/ui/Input";
import SelectFilter from "../../../components/ui/SelectFilter";
import Button from "../../../components/ui/Button";
import { useParams } from "react-router";

// Dummy sections
const courseSections = [
  "Section 1: Getting Started with Node.js",
  "Section 2: Core Concepts and Modules",
  "Section 3: Building REST APIs with Express",
  "Section 4: Authentication & Deployment",
];

const AddLesson = () => {
  const { lessonId } = useParams();
  const id = useId();
  const [contentType, setContentType] = useState<"video" | "pdf" | "text">(
    "text"
  );
  const [selectedSection, setSelectedSection] = useState(courseSections[0]);

  return (
    <Layout
      parentPage={IROUTES.COURSES}
      pageHeading={lessonId ? "Edit Lesson" : "Add New Lesson"}
    >
      <form className="w-full bg-white border border-gray-100 rounded-xl p-8 shadow-sm mt-6">
        {/* Lesson title */}
        <div className="flex gap-4">
          <Input
            label="Lesson Title"
            type="text"
            id={`title-${id}`}
            name="title"
            className="mb-4 w-1/2"
          />

          {/* Lesson duration */}
          <Input
            label="Duration (e.g. 10:30 or 45 min)"
            type="text"
            id={`duration-${id}`}
            name="duration"
            className="mb-4 w-1/2"
          />
        </div>
        <div className="flex gap-2">
          {/* Content type selector */}
          <div className="mb-6 w-1/2">
            <label className="text-sm font-medium text-gray-700">
              Lesson Type
            </label>
            <div className="flex gap-3 mt-2">
              {["video", "pdf", "text"].map((type) => (
                <label
                  key={type}
                  className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                    contentType === type
                      ? "bg-primary-600 text-white border-primary-600 shadow-sm"
                      : "bg-white text-gray-700 border-gray-300 hover:border-primary-300 hover:bg-primary-50"
                  }`}
                >
                  <input
                    type="radio"
                    value={type}
                    checked={contentType === type}
                    onChange={() =>
                      setContentType(type as "video" | "pdf" | "text")
                    }
                    className="hidden"
                  />
                  {type === "text" ? "Text (WYSIWYG)" : type.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* Section selector */}
          <div className="mb-4 w-1/2">
            <label className="text-sm font-medium text-gray-700 block mb-1.5">
              Course Section
            </label>
            <SelectFilter
              label="Select section"
              value={selectedSection}
              options={courseSections}
              onChange={setSelectedSection}
              fullWidth
            />
          </div>
        </div>

        {/* Conditional content input */}
        {contentType === "video" && (
          <Input
            label="Upload Video"
            type="file"
            id={`video-${id}`}
            name="video"
            accept="video/*"
            className="mb-4 w-1/2"
          />
        )}

        {contentType === "pdf" && (
          <Input
            label="Upload PDF"
            type="file"
            id={`pdf-${id}`}
            name="pdf"
            accept="application/pdf"
            className="mb-4 w-1/2"
          />
        )}

        {contentType === "text" && (
          <Wysiwyg
            label="Lesson Content"
            id={`content-${id}`}
            name="content"
            className="mb-4"
          />
        )}

        <div className="flex justify-end items-center mt-8 pt-6 border-t border-gray-100">
          {lessonId && (
            <button className="text-red-500 hover:text-red-600 text-sm font-medium mr-6 cursor-pointer transition-colors">
              Delete lesson
            </button>
          )}
          <Button text={lessonId ? "Update Lesson" : "Add Lesson"} />
        </div>
      </form>
    </Layout>
  );
};

export default AddLesson;
