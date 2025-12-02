import { GoHomeFill } from "react-icons/go";
import { FaFileLines, FaGear } from "react-icons/fa6";
import { MdNoteAdd, MdExplore } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { IROUTES } from "./routes";

export const instructorNavItems = [
    {
        text: "Dashboard",
        icon: GoHomeFill,
        link: IROUTES.DASHBOARD
    },
    {
        text: "Courses",
        icon: FaFileLines,
        link: IROUTES.COURSES
    },
    {
        text: "Create Course",
        icon: MdNoteAdd,
        link: IROUTES.COURSE_CREATE
    },
    {
        text: "Students",
        icon: IoPeople,
        link: IROUTES.STUDENTS
    },
    {
        text: "Settings",
        icon: FaGear,
        link: IROUTES.SETTINGS
    }
];

export const studentNavItems = [
    {
        text: "Dashboard",
        icon: GoHomeFill,
        link: IROUTES.STUDENT_DASHBOARD
    },
    {
        text: "My Courses",
        icon: FaFileLines,
        link: IROUTES.STUDENT_COURSES
    },
    {
        text: "Explore Courses",
        icon: MdExplore,
        link: IROUTES.STUDENT_FIND_COURSES
    },
    {
        text: "Settings",
        icon: FaGear,
        link: IROUTES.STUDENT_SETTINGS
    }
];
