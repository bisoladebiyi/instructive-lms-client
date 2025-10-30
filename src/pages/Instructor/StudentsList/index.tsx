import { IoIosSearch } from "react-icons/io";
import { StudentsTable } from "../../../utils/constants/dummy";
import CustomTable from "../../../components/ui/Table";
import Layout from "../../../components/Layout";
import { IROUTES } from "../../../utils/constants/routes";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const StudentsList = () => {
  return (
    <Layout parentPage={IROUTES.STUDENTS}>
      <>
        <div className="my-5 flex justify-between items-center">
          <div className="w-full relative">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search..."
              className="bg-gray-100 py-2 px-4 pl-7 text-xs w-1/4 rounded outline-0 border border-gray-200 text-gray-500"
            />
            <IoIosSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
          {/* sort by course  */}
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Show</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              defaultValue={10}
              label="Filter by"
            >
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={20}>Public</MenuItem>
              <MenuItem value={30}>Private</MenuItem>
            </Select>
          </FormControl>
        </div>
        <CustomTable cols={StudentsTable.columns} rows={StudentsTable.rows} />
      </>
    </Layout>
  );
};

export default StudentsList;
