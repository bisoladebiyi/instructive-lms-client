import { IoIosArrowRoundForward } from "react-icons/io";
import CustomTable from "../../../components/ui/Table";
import { StudentsTable } from "../../../utils/constants/dummy";
import { Link } from "react-router";
import { IROUTES } from "../../../utils/constants/routes";

const StudentsOverview = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-lg text-gray-900">Students Overview</h2>
        <Link to={IROUTES.STUDENTS} className="flex items-center gap-1 text-primary-600 hover:text-primary-700 hover:gap-2 transition-all cursor-pointer text-sm font-medium">
          View all <IoIosArrowRoundForward className="text-lg" />
        </Link>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <CustomTable cols={StudentsTable.columns} rows={StudentsTable.rows} />
      </div>
    </section>
  );
};

export default StudentsOverview;
