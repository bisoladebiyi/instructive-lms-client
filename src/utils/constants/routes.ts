export const IROUTES = {
    SIGNUP: "/signup",
    LOGIN: "/login",
    // Instructor Pages
    DASHBOARD: "/instructor/dashboard",
    COURSES: "/instructor/courses",
    COURSE: "/instructor/courses/:courseId",
    COURSE_CREATE: "/instructor/courses/create",
    COURSE_EDIT: "/instructor/courses/edit/:courseId",
    LESSONS: "/instructor/courses/:courseId/lessons",
    LESSON: "/instructor/courses/:courseId/lessons/:lessonId",
    LESSON_CREATE: "/instructor/courses/:courseId/lessons/create",
    LESSON_EDIT: "/instructor/courses/:courseId/lessons/edit/:lessonId",
    STUDENTS: "/instructor/students",
    SETTINGS: "/instructor/settings",
    // Student Pages
    STUDENT_DASHBOARD: "/student/dashboard",
    STUDENT_COURSES: "/student/courses",
    STUDENT_COURSE: "/student/courses/:courseId",
    STUDENT_LESSON: "/student/courses/:courseId/lessons/:lessonId",
    STUDENT_FIND_COURSES: "/student/explore",
    STUDENT_SETTINGS: "/student/settings",
};