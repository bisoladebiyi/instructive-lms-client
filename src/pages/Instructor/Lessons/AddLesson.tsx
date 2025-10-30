import { useId, useState } from "react";
import Layout from "../../../components/Layout";
import { IROUTES } from "../../../utils/constants/routes";
import Wysiwyg from "../../../components/ui/Wysiwyg";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { useParams } from "react-router";

const AddLesson = () => {
  const { lessonId } = useParams();
  const id = useId();
  const [contentType, setContentType] = useState<"video" | "pdf" | "text">(
    "text"
  );

  return (
    <Layout
      parentPage={IROUTES.COURSES}
      pageHeading={lessonId ? "Edit Lesson" : "Add New Lesson"}
    >
      <form className="w-full border border-gray-200 rounded-MD p-8 bg-white mt-5">
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

        {/* Content type selector */}
        <div className="mb-4">
          <label className="text-sm">Lesson Type</label>
          <div className="flex gap-4 mt-1">
            {["video", "pdf", "text"].map((type) => (
              <label
                key={type}
                className={`cursor-pointer px-3 py-1 text-sm rounded-md border ${
                  contentType === type
                    ? "bg-black text-white "
                    : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
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

        <div className="flex justify-end items-center mt-4">
          {lessonId && (
            <button className="text-red-400 text-sm font-light uppercase underline mr-4 cursor-pointer">
              Delete lesson
            </button>
          )}
          <Button text={lessonId ? "Update" : "Add"} />
        </div>
      </form>
    </Layout>
  );
};

export default AddLesson;
