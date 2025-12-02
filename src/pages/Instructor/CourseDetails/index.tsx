import Layout from "../../../components/Layout";
import { IROUTES } from "../../../utils/constants/routes";
import CourseOverview from "./CourseOverview";
import VerticalTabs from "../../../components/ui/VerticalTabs";
import Curriculum from "./Curriculum";
import { Link } from "react-router";

const CourseDetails = () => {
  const courseTabs = [
    { label: "Overview", content: <CourseOverview /> },
    { label: "Curriculum", content: <Curriculum /> },
  ];
  return (
    <Layout parentPage={IROUTES.COURSES}>
      <>
        <nav className="bg-sidebar flex items-center justify-between text-white px-6 py-4 -mx-8 -mt-8 relative z-10 mb-8 shadow-lg">
          <p className="font-medium">Introduction to node.js - A beginner's guide</p>

          <div className="flex items-center gap-4">
            <Link
              to={IROUTES.COURSES + `/edit/${5}`}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Edit
            </Link>
            <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200">
              Publish
            </button>
          </div>
        </nav>
        <VerticalTabs tabs={courseTabs} />
      </>
    </Layout>
  );
};

export default CourseDetails;
