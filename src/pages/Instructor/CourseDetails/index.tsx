import Layout from "../../../components/Layout";
import { IROUTES } from "../../../utils/constants/routes";
import CourseOverview from "./CourseOverview";
import VerticalTabs from "../../../components/ui/VerticalTabs";
import Curriculum from "./Curriculum";

const CourseDetails = () => {
  const courseTabs = [
    { label: "Overview", content: <CourseOverview /> },
    { label: "Curriculum", content: <Curriculum /> },
  ];
  return (
    <Layout page={IROUTES.COURSE}>
      <>
        <nav className="bg-gray-800 flex items-center justify-between text-white p-3 py-5 -m-8 font-extralight relative z-10 border-b border-white/50 mb-10">
          <p>Introduction to node.js - A beginner's guide</p>

          <div>
            {/* change to link  */}
            <button className="underline text-xs mr-5 cursor-pointer">
              Edit
            </button>
            <button className="bg-cyan-600 p-3 rounded text-xs cursor-pointer">
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
