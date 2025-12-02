import Layout from "../../../components/Layout";
import { instructorNavItems } from "../../../utils/constants/navItems";
import Courses from "./Courses";
import Stats from "./Stats";
import StudentsOverview from "./StudentsOverview";

const Dashboard = () => {
  return (
    <Layout pageHeading={instructorNavItems[0].text}>
      <>
        {/* stats  */}
        <Stats />
        {/* display recent course  */}
        <Courses />
        {/* students overview  */}
        <StudentsOverview />
      </>
    </Layout>
  );
};

export default Dashboard;
