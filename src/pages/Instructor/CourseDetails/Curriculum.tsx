import ReusableAccordion from "../../../components/ui/Accordion";
import { course, curriculumSections } from "../../../utils/constants/dummy";
import DOMPurify from "dompurify";

const Curriculum = () => {
  const accordionItems = curriculumSections.map((section) => ({
    title: section.title,
    content: (
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(section.content),
        }}
      />
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
