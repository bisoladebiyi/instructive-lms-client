import { IoIosArrowRoundForward } from "react-icons/io";
import CustomTable from "../../../components/ui/Table";
import { StudentsTable } from "../../../utils/constants/dummy";
import { Link } from "react-router";
import { IROUTES } from "../../../utils/constants/routes";

const StudentsOverview = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-medium text-2xl">Students Overview</h2>
        <Link to={IROUTES.STUDENTS} className="flex items-center gap-1 underline hover:gap-2 transition-all cursor-pointer text-sm text-gray-500">
          View all <IoIosArrowRoundForward />
        </Link>
      </div>
      <CustomTable cols={StudentsTable.columns} rows={StudentsTable.rows} />
    </section>
  );
};

export default StudentsOverview;
