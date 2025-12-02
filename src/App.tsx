import { Route, Routes, useLocation, useNavigate } from "react-router";
import SignUp from "./pages/Auth/SignUp.tsx";
import Login from "./pages/Auth/Login.tsx";
import { IROUTES } from "./utils/constants/routes.ts";
import { useEffect } from "react";
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
      </Routes>
    </div>
  );
}

export default App;
