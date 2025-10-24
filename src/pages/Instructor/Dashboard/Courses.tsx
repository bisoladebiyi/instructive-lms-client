import { Rating } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";

const Courses = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-2xl">Recently Published</h2>
        <p className="flex items-center gap-1 underline hover:gap-2 transition-all cursor-pointer text-sm text-gray-500">
          View all <IoIosArrowRoundForward />
        </p>
      </div>
      <div className="grid grid-cols-4 mt-3 gap-4">
        {/* course cards  */}
        {Array(4)
          .fill(3)
          .map(() => (
            <div className="hover:scale-105 transition-transform cursor-pointer">
              <figure className="w-full mb-2">
                <img
                  className="w-full h-40 object-cover"
                  src="https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd1436504d3891835d2fb7150a6feaee968abf4a5-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75"
                  alt="course-banner"
                />
              </figure>
              <p className="text-base font-medium">
                Introduction to node.js - A beginner's guide
              </p>
              <p className="text-xs text-gray-600 mt-2">Abisola Adebiyi</p>
              <p className="flex gap-1 items-center">
                <span className="text-sm text-amber-400">4.5</span>
                <Rating
                  name="read-only"
                  value={4.5}
                  readOnly
                  precision={0.5}
                  size="small"
                />
                <span className="text-[10px] text-gray-500">(300)</span>
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Courses;
