import Layout from "../../../components/Layout";
import { IROUTES } from "../../../utils/constants/routes";
import Stats from "./Stats";
import EnrolledCourses from "./EnrolledCourses";

const StudentDashboard = () => {
  return (
    <Layout
      parentPage={IROUTES.STUDENT_DASHBOARD}
      pageHeading="Dashboard"
      userType="student"
    >
      <>
        <Stats />
        <EnrolledCourses />
      </>
    </Layout>
  );
};

export default StudentDashboard;
