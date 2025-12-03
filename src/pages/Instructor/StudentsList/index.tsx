import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { StudentsTable } from "../../../utils/constants/dummy";
import CustomTable from "../../../components/ui/Table";
import Layout from "../../../components/Layout";
import SelectFilter from "../../../components/ui/SelectFilter";
import { IROUTES } from "../../../utils/constants/routes";

const filterOptions = ["All", "Active", "Inactive"];

const StudentsList = () => {
  const [filter, setFilter] = useState("All");

  return (
    <Layout parentPage={IROUTES.STUDENTS} pageHeading="Students">
      <>
        <div className="my-6 flex justify-between items-center">
          <div className="relative">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search students..."
              className="bg-white py-2.5 px-4 pl-10 text-sm w-80 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all duration-200"
            />
            <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          </div>
          {/* sort by course  */}
          <SelectFilter
            label="Show"
            value={filter}
            options={filterOptions}
            onChange={setFilter}
            minWidth={120}
          />
        </div>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <CustomTable cols={StudentsTable.columns} rows={StudentsTable.rows} />
        </div>
      </>
    </Layout>
  );
};

export default StudentsList;
