import SectionDetails from "../../../components/Instructor/SectionDetails";
import ReusableAccordion from "../../../components/ui/Accordion";
import { course, curriculumSections } from "../../../utils/constants/dummy";
// import DOMPurify from "dompurify";

const Curriculum = () => {
  const accordionItems = curriculumSections.map((section) => ({
    title: section.title,
    content: (
      <SectionDetails
        sectionTitle="Section 1: Introduction to Node.js"
        initialLessons={[
          { id: "1", title: "What is Node.js?" },
          { id: "2", title: "How Node.js works under the hood" },
          { id: "3", title: "Installing Node and npm" },
          { id: "4", title: "Your first Node.js script" },
        ]}
      />
      // <div
      //   dangerouslySetInnerHTML={{
      //     __html: DOMPurify.sanitize(section.content),
      //   }}
      // />
    ),
  }));
  return (
    <div className="max-w-5xl mx-auto px-6 py-0 space-y-6">
      {/* Banner */}
      <div className="w-full h-64 rounded-2xl overflow-hidden shadow">
        <img
          src={course.bannerUrl}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>
      <ReusableAccordion items={accordionItems} />
    </div>
  );
};

export default Curriculum;
