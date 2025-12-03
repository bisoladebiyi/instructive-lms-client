import React, { useId, useState } from "react";
import Layout from "../../../components/Layout";
import { IROUTES } from "../../../utils/constants/routes";
import Wysiwyg from "../../../components/ui/Wysiwyg";
import Input from "../../../components/ui/Input";
import SelectFilter from "../../../components/ui/SelectFilter";
import Button from "../../../components/ui/Button";
import { useParams } from "react-router";
import toast from "react-hot-toast";

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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success(
        lessonId ? "Lesson updated successfully!" : "Lesson added successfully!"
      );
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this lesson?")) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Lesson deleted successfully!");
    } catch {
      toast.error("Failed to delete lesson. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout
      parentPage={IROUTES.COURSES}
      pageHeading={lessonId ? "Edit Lesson" : "Add New Lesson"}
    >
      <form onSubmit={handleSubmit} className="w-full bg-white border border-gray-100 rounded-xl p-4 sm:p-8 shadow-sm mt-4 sm:mt-6">
        {/* Lesson title */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            label="Lesson Title"
            type="text"
            id={`title-${id}`}
            name="title"
            className="mb-4 w-full sm:w-1/2"
          />

          {/* Lesson duration */}
          <Input
            label="Duration (e.g. 10:30 or 45 min)"
            type="text"
            id={`duration-${id}`}
            name="duration"
            className="mb-4 w-full sm:w-1/2"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
          {/* Content type selector */}
          <div className="mb-4 sm:mb-6 w-full sm:w-1/2">
            <label className="text-sm font-medium text-gray-700">
              Lesson Type
            </label>
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
              {["video", "pdf", "text"].map((type) => (
                <label
                  key={type}
                  className={`cursor-pointer px-3 sm:px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
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
                  {type === "text" ? "Text" : type.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          {/* Section selector */}
          <div className="mb-4 w-full sm:w-1/2">
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
            className="mb-4 w-full sm:w-1/2"
          />
        )}

        {contentType === "pdf" && (
          <Input
            label="Upload PDF"
            type="file"
            id={`pdf-${id}`}
            name="pdf"
            accept="application/pdf"
            className="mb-4 w-full sm:w-1/2"
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

        <div className="flex flex-col-reverse sm:flex-row justify-end items-stretch sm:items-center mt-6 sm:mt-8 pt-6 border-t border-gray-100 gap-3 sm:gap-0">
          {lessonId && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={isLoading}
              className="text-red-500 hover:text-red-600 text-sm font-medium sm:mr-6 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Delete lesson
            </button>
          )}
          <Button
            text={lessonId ? "Update Lesson" : "Add Lesson"}
            type="submit"
            loading={isLoading}
          />
        </div>
      </form>
    </Layout>
  );
};

export default AddLesson;
