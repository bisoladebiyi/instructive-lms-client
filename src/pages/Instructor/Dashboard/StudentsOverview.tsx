import { IoIosArrowRoundForward } from "react-icons/io";
import CustomTable from "../../../components/ui/Table";
import { StudentsTable } from "../../../utils/constants/dummy";
import { Link } from "react-router";
import { IROUTES } from "../../../utils/constants/routes";
import EmptyState from "../../../components/ui/EmptyState";
import PeopleIcon from "@mui/icons-material/People";

const StudentsOverview = () => {
  return (
    <section className="mt-8 sm:mt-10">
      <div className="flex justify-between items-center mb-4 sm:mb-5">
        <h2 className="font-semibold text-base sm:text-lg text-gray-900">
          Students Overview
        </h2>
        <Link
          to={IROUTES.STUDENTS}
          className="flex items-center gap-1 text-primary-600 hover:text-primary-700 hover:gap-2 transition-all cursor-pointer text-xs sm:text-sm font-medium"
        >
          View all <IoIosArrowRoundForward className="text-lg" />
        </Link>
      </div>
      {StudentsTable.rows.length > 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-x-auto">
          <CustomTable cols={StudentsTable.columns} rows={StudentsTable.rows} />
        </div>
      ) : (
        <EmptyState
          icon={<PeopleIcon sx={{ fontSize: 32, color: "#9ca3af" }} />}
          title="No students yet"
          description="You don't have any enrolled students yet. Once students enroll in your courses, they will appear here."
        />
      )}
    </section>
  );
};

export default StudentsOverview;
