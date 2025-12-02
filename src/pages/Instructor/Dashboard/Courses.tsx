import { IoIosArrowRoundForward } from "react-icons/io";
import CourseCard from "../../../components/ui/CourseCard";
import { Link } from "react-router";
import { IROUTES } from "../../../utils/constants/routes";

const Courses = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-lg text-gray-900">Recently Published</h2>
        <Link to={IROUTES.COURSES}>
          <p className="flex items-center gap-1 text-primary-600 hover:text-primary-700 hover:gap-2 transition-all cursor-pointer text-sm font-medium">
            View all <IoIosArrowRoundForward className="text-lg" />
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {/* course cards  */}
        {Array(4)
          .fill(3)
          .map((_, i) => (
            <CourseCard
              key={i}
              id={i}
              author="Abisola Adebiyi"
              title="Introduction to node.js - A beginner's guide"
              rating={4.5}
              raters={300}
              bannerImg="https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd1436504d3891835d2fb7150a6feaee968abf4a5-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75"
            />
          ))}
      </div>
    </section>
  );
};

export default Courses;
