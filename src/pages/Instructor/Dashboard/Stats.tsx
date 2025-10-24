import { FaFileLines } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaFileCircleCheck } from "react-icons/fa6";

const Stats = () => {
  return (
    <section className="w-full mt-4 flex gap-4">
      <div className="bg-gray-200/50 rounded p-3 w-1/5">
        <h2 className="text-3xl font-semibold">40</h2>
        <p className="text-sm text-gray-800">Courses</p>
        <div className="flex justify-end -mt-2">
          <FaFileLines className="text-xl text-gray-600" />
        </div>
      </div>
      <div className="bg-gray-200/50 rounded p-3 w-1/5">
        <h2 className="text-3xl font-semibold">40</h2>
        <p className="text-sm text-gray-800">Courses published</p>
        <div className="flex justify-end -mt-2">
          <FaFileCircleCheck className="text-xl text-gray-600" />
        </div>
      </div>
      <div className="bg-gray-200/50 rounded p-3 w-1/5">
        <h2 className="text-3xl font-semibold">95</h2>
        <p className="text-sm text-gray-800">Total students</p>
        <div className="flex justify-end -mt-2">
          <IoPeople className="text-xl text-gray-600" />
        </div>
      </div>
      <div className="bg-gray-200/50 rounded p-3 w-1/5">
        <h2 className="text-3xl font-semibold">4.8</h2>
        <p className="text-sm text-gray-800">Average rating</p>
        <div className="flex justify-end -mt-2">
          <IoIosStar className="text-xl text-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
