import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tasks from "../pages/Tasks";
import Navbar from "../components/Navbar";

const AppRoutes = ({ isLogged, setIsLogged }) => {
  return (
    <>
      {isLogged && <Navbar setIsLogged={setIsLogged} />}

      <Routes>
        <Route
          path="/login"
          element={
            isLogged
              ? <Navigate to="/tasks" />
              : <Login setIsLogged={setIsLogged} />
          }
        />

        <Route
          path="/register"
          element={
            isLogged
              ? <Navigate to="/tasks" />
              : <Register />
          }
        />

        <Route
          path="/tasks"
          element={
            isLogged
              ? <Tasks />
              : <Navigate to="/login" />
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
