import Layout from "../../../components/Layout";
import Courses from "./Courses";
import Stats from "./Stats";
import StudentsOverview from "./StudentsOverview";

const Dashboard = () => {
  return (
    <Layout>
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
