import { Route, Routes, useLocation, useNavigate } from "react-router";
import SignUp from "./pages/Auth/SignUp.tsx";
import Login from "./pages/Auth/Login.tsx";
import { IROUTES } from "./utils/constants/routes.ts";
import { useEffect } from "react";
import Dashboard from "./pages/Instructor/Dashboard/index.tsx";

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
      </Routes>
    </div>
  );
}

export default App;
