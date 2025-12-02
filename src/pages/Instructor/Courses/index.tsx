import CourseCard from "../../../components/ui/CourseCard";
import Layout from "../../../components/Layout";
import { IROUTES } from "../../../utils/constants/routes";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { IoIosSearch } from "react-icons/io";

const Courses = () => {
  return (
    <Layout parentPage={IROUTES.COURSES} pageHeading={"Courses"}>
      <>
        {/* search and filter  */}
        <div className="my-6 flex justify-between items-center">
          <div className="relative">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search courses..."
              className="bg-white py-2.5 px-4 pl-10 text-sm w-80 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
            />
            <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ fontSize: '0.875rem' }}>Show</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              defaultValue={10}
              label="Filter by"
              sx={{ fontSize: '0.875rem' }}
            >
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={20}>Public</MenuItem>
              <MenuItem value={30}>Private</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {/* course cards  */}
          {Array(10)
            .fill(3)
            .map((_, i) => (
              <CourseCard
                key={i}
                id={i}
                author="Abisola Adebiyi"
                title="Introduction to node.js - A beginner's guide"
                rating={4.5}
                raters={300}
                isPrivate
                bannerImg="https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd1436504d3891835d2fb7150a6feaee968abf4a5-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75"
              />
            ))}
        </div>
      </>
    </Layout>
  );
};

export default Courses;
