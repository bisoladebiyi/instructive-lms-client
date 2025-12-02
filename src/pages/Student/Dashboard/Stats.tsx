import { FaFileLines } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

const stats = [
  {
    label: "Enrolled Courses",
    value: "8",
    icon: FaFileLines,
    bgColor: "bg-primary-50",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
  },
  {
    label: "Completed",
    value: "5",
    icon: FaCheckCircle,
    bgColor: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    label: "Hours Learned",
    value: "42",
    icon: IoTime,
    bgColor: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    label: "Certificates",
    value: "3",
    icon: IoIosStar,
    bgColor: "bg-rose-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
];

const Stats = () => {
  return (
    <section className="w-full mt-6 grid grid-cols-4 gap-5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`${stat.bgColor} rounded-xl p-5 transition-all duration-200 hover:shadow-md`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
              <h2 className="text-3xl font-bold text-gray-900">{stat.value}</h2>
            </div>
            <div className={`${stat.iconBg} p-3 rounded-lg`}>
              <stat.icon className={`text-xl ${stat.iconColor}`} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
