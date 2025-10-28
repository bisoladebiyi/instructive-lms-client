import { Route, Routes, useLocation, useNavigate } from "react-router";
import SignUp from "./pages/Auth/SignUp.tsx";
import Login from "./pages/Auth/Login.tsx";
import { IROUTES } from "./utils/constants/routes.ts";
import { useEffect } from "react";
import Dashboard from "./pages/Instructor/Dashboard/index.tsx";
import Courses from "./pages/Instructor/Courses/index.tsx";
import CourseDetails from "./pages/Instructor/CourseDetails/index.tsx";
import CreateCourse from "./pages/Instructor/Courses/CreateCourse.tsx";

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
        <Route path={IROUTES.SIGNUP} element={<SignUp />} />
        <Route path={IROUTES.LOGIN} element={<Login />} />
        <Route path={IROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={IROUTES.COURSES} element={<Courses />} />
        <Route path={IROUTES.COURSE} element={<CourseDetails />} />
        <Route path={IROUTES.COURSE_CREATE} element={<CreateCourse />} />
        <Route path={IROUTES.COURSE_EDIT} element={<CreateCourse />} />
      </Routes>
    </div>
  );
}

export default App;
