import React, { useId, useState } from "react";
import { IROUTES } from "../../../utils/constants/routes";
import Layout from "../../../components/Layout";
import Input from "../../../components/ui/Input";
import Wysiwyg from "../../../components/ui/Wysiwyg";
import { IconButton, Tooltip } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
// import CourseDetails from "../CourseDetails";
import { MdInfo } from "react-icons/md";
import Button from "../../../components/ui/Button";
import { useParams } from "react-router";

const CreateCourse = () => {
  const { courseId } = useParams();
  const id = useId();
  const [sections, setSections] = useState<string[]>([""]);

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
  return (
    <Layout page={courseId ? IROUTES.COURSE_EDIT : IROUTES.COURSE_CREATE}>
      <div className="w-full">
        <form
          action=""
          className="w-full mt-5 border border-gray-200 rounded-md p-8"
        >
          <div className="flex gap-4">
            <Input
              label="Title"
              type="text"
              id={`title-${id}`}
              name="title"
              className="mb-3 w-1/2"
            />
            <Input
              label="Banner Image"
              type="file"
              id={`bannerImg-${id}`}
              name="bannerImg"
              className="mb-3 w-1/2"
            />
          </div>

          <Wysiwyg
            label="Description"
            id={`desc-${id}`}
            name="desc"
            className="mb-3"
          />
          <div className="mt-6">
            <label className="block font-medium mb-2">
              Course Sections{" "}
              <Tooltip title="You can add lessons to each section on the course details page.">
                <IconButton>
                  <MdInfo className="text-sm" />
                </IconButton>
              </Tooltip>
            </label>

            {sections.map((section: string, index: number) => (
              <div key={index} className="flex items-center gap-1 mb-3">
                <Input
                  id=""
                  name=""
                  label={``}
                  type="text"
                  placeholder={`Section ${index + 1} title`}
                  value={section}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleSectionChange(index, e.target.value)
                  }
                  className="flex-1"
                />

                {/* Remove Section */}
                <IconButton
                  color="error"
                  onClick={() => handleRemoveSection(index)}
                  disabled={sections.length === 1}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>

                {/* Add Section */}
                {index === sections.length - 1 && (
                  <IconButton color="primary" onClick={handleAddSection}>
                    <AddCircleOutlineIcon />
                  </IconButton>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center mt-4">
            {courseId && (
              <button className="text-red-400 text-sm font-light uppercase underline mr-4 cursor-pointer">
                Delete course
              </button>
            )}
            <Button text={courseId ? "Update" : "Create"} />
          </div>
        </form>
      </div>
      {/* <div
        className="flex-1 flex justify-center items-start border rounded-lg bg-gray-50 shadow-inner overflow-auto"
        style={{
          height: "650px",
          padding: "1rem",
        }}
      >
        <div
          style={{
            width: "1440px", // full desktop width
            transform: "scale(0.7)", // zoom out (adjust 0.6–0.8)
            transformOrigin: "top center",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 0 15px rgba(0,0,0,0.1)",
            background: "white",
          }}
        >
          <CourseDetails />
        </div>
      </div> */}
    </Layout>
  );
};

export default CreateCourse;
