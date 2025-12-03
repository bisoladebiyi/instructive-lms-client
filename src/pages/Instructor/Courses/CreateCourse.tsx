import React, { useId, useState } from "react";
import { IROUTES } from "../../../utils/constants/routes";
import Layout from "../../../components/Layout";
import Input from "../../../components/ui/Input";
import Wysiwyg from "../../../components/ui/Wysiwyg";
import SelectFilter from "../../../components/ui/SelectFilter";
import { IconButton, Tooltip } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { MdInfo } from "react-icons/md";
import Button from "../../../components/ui/Button";
import { useParams } from "react-router";
import toast from "react-hot-toast";

const categories = [
  "Development",
  "Design",
  "Data Science",
  "Business",
  "Marketing",
  "Other",
];

const CreateCourse = () => {
  const { courseId } = useParams();
  const id = useId();
  const [sections, setSections] = useState<string[]>([""]);
  const [category, setCategory] = useState("Development");
  const [learningPoints, setLearningPoints] = useState<string[]>([""]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success(
        courseId ? "Course updated successfully!" : "Course created successfully!"
      );
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this course?")) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Course deleted successfully!");
    } catch {
      toast.error("Failed to delete course. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddSection = () => {
    setSections((prev) => [...prev, ""]);
  };

  const handleRemoveSection = (index: number) => {
    setSections((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSectionChange = (index: number, value: string) => {
    setSections((prev) =>
      prev.map((section, i) => (i === index ? value : section))
    );
  };

  const handleAddLearningPoint = () => {
    setLearningPoints((prev) => [...prev, ""]);
  };

  const handleRemoveLearningPoint = (index: number) => {
    setLearningPoints((prev) => prev.filter((_, i) => i !== index));
  };

  const handleLearningPointChange = (index: number, value: string) => {
    setLearningPoints((prev) =>
      prev.map((point, i) => (i === index ? value : point))
    );
  };

  return (
    <Layout
      parentPage={courseId ? IROUTES.COURSE_EDIT : IROUTES.COURSE_CREATE}
      pageHeading={courseId ? "Edit Course" : "Create Course"}
    >
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full mt-4 sm:mt-6 bg-white border border-gray-100 rounded-xl p-4 sm:p-8 shadow-sm"
        >
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            Basic Information
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Input
              label="Course Title"
              type="text"
              id={`title-${id}`}
              name="title"
              placeholder="e.g. Introduction to Node.js"
              className="w-full sm:w-1/2"
            />
            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-gray-700 block mb-1.5">
                Category
              </label>
              <SelectFilter
                label="Select category"
                value={category}
                options={categories}
                onChange={setCategory}
                fullWidth
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Input
              label="Duration (e.g. 8h 30m)"
              type="text"
              id={`duration-${id}`}
              name="duration"
              placeholder="e.g. 8h 30m"
              className="w-full sm:w-1/2"
            />
            <Input
              label="Banner Image"
              type="file"
              id={`bannerImg-${id}`}
              name="bannerImg"
              className="w-full sm:w-1/2"
            />
          </div>

          <Wysiwyg
            label="Course Description"
            id={`desc-${id}`}
            name="desc"
            className="mb-6"
          />

          {/* What students will learn */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              What students will learn{" "}
              <Tooltip title="Add key learning outcomes that students will achieve by the end of this course.">
                <IconButton size="small">
                  <MdInfo className="text-sm" />
                </IconButton>
              </Tooltip>
            </label>

            {learningPoints.map((point: string, index: number) => (
              <div key={index} className="flex items-center gap-1 mb-3">
                <Input
                  id={`learning-${index}`}
                  name={`learning-${index}`}
                  label=""
                  type="text"
                  placeholder={`Learning point ${index + 1}`}
                  value={point}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleLearningPointChange(index, e.target.value)
                  }
                  className="flex-1"
                />

                <IconButton
                  color="error"
                  onClick={() => handleRemoveLearningPoint(index)}
                  disabled={learningPoints.length === 1}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>

                {index === learningPoints.length - 1 && (
                  <IconButton color="primary" onClick={handleAddLearningPoint}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                )}
              </div>
            ))}
          </div>

          {/* Course Sections */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Course Sections{" "}
              <Tooltip title="You can add lessons to each section on the course details page after creating the course.">
                <IconButton size="small">
                  <MdInfo className="text-sm" />
                </IconButton>
              </Tooltip>
            </label>

            {sections.map((section: string, index: number) => (
              <div key={index} className="flex items-center gap-1 mb-3">
                <Input
                  id={`section-${index}`}
                  name={`section-${index}`}
                  label=""
                  type="text"
                  placeholder={`Section ${index + 1} title`}
                  value={section}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleSectionChange(index, e.target.value)
                  }
                  className="flex-1"
                />

                <IconButton
                  color="error"
                  onClick={() => handleRemoveSection(index)}
                  disabled={sections.length === 1}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>

                {index === sections.length - 1 && (
                  <IconButton color="primary" onClick={handleAddSection}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end items-stretch sm:items-center mt-6 sm:mt-8 pt-6 border-t border-gray-100 gap-3 sm:gap-0">
            {courseId && (
              <button
                type="button"
                onClick={handleDelete}
                disabled={isLoading}
                className="text-red-500 hover:text-red-600 text-sm font-medium sm:mr-6 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Delete course
              </button>
            )}
            <Button
              text={courseId ? "Update Course" : "Create Course"}
              type="submit"
              loading={isLoading}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateCourse;
