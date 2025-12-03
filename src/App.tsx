import { Route, Routes, useLocation, useNavigate } from "react-router";
import SignUp from "./pages/Auth/SignUp.tsx";
import Login from "./pages/Auth/Login.tsx";
import { IROUTES } from "./utils/constants/routes.ts";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
// Instructor Pages
import Dashboard from "./pages/Instructor/Dashboard/index.tsx";
import Courses from "./pages/Instructor/Courses/index.tsx";
import CourseDetails from "./pages/Instructor/CourseDetails/index.tsx";
import CreateCourse from "./pages/Instructor/Courses/CreateCourse.tsx";
import StudentsList from "./pages/Instructor/StudentsList/index.tsx";
import AddLesson from "./pages/Instructor/Lessons/AddLesson.tsx";
import LessonDetails from "./pages/Instructor/Lessons/LessonDetails.tsx";
import Settings from "./pages/Instructor/Settings/index.tsx";
// Student Pages
import StudentDashboard from "./pages/Student/Dashboard/index.tsx";
import StudentCourses from "./pages/Student/Courses/index.tsx";
import StudentCourseDetails from "./pages/Student/CourseDetails/index.tsx";
import StudentLesson from "./pages/Student/Lesson/index.tsx";
import ExploreCourses from "./pages/Student/ExploreCourses/index.tsx";
import StudentSettings from "./pages/Student/Settings/index.tsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate(`${IROUTES.SIGNUP}?role=instructor`, { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="App">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#1f2937",
            fontSize: "14px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <Routes>
        {/* Auth Routes */}
        <Route path={IROUTES.SIGNUP} element={<SignUp />} />
        <Route path={IROUTES.LOGIN} element={<Login />} />
        {/* Instructor Routes */}
        <Route path={IROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={IROUTES.COURSES} element={<Courses />} />
        <Route path={IROUTES.COURSE} element={<CourseDetails />} />
        <Route path={IROUTES.COURSE_CREATE} element={<CreateCourse />} />
        <Route path={IROUTES.COURSE_EDIT} element={<CreateCourse />} />
        <Route path={IROUTES.STUDENTS} element={<StudentsList />} />
        <Route path={IROUTES.LESSON_CREATE} element={<AddLesson />} />
        <Route path={IROUTES.LESSON_EDIT} element={<AddLesson />} />
        <Route path={IROUTES.LESSON} element={<LessonDetails />} />
        <Route path={IROUTES.SETTINGS} element={<Settings />} />
        {/* Student Routes */}
        <Route path={IROUTES.STUDENT_DASHBOARD} element={<StudentDashboard />} />
        <Route path={IROUTES.STUDENT_COURSES} element={<StudentCourses />} />
        <Route path={IROUTES.STUDENT_COURSE} element={<StudentCourseDetails />} />
        <Route path={IROUTES.STUDENT_LESSON} element={<StudentLesson />} />
        <Route path={IROUTES.STUDENT_FIND_COURSES} element={<ExploreCourses />} />
        <Route path={IROUTES.STUDENT_SETTINGS} element={<StudentSettings />} />
      </Routes>
    </div>
  );
}

export default App;
