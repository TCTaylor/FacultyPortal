import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Navigation from "./pages/navigation/navigation.component";
import Home from "./pages/home/home.component";
import SignIn from "./pages/sign-in/sign-in.component";
import Profile from "./pages/profile/profile.component";
import FacultyCourses from "./pages/faculty-courses/faculty-courses.component";
import CourseDetails from "./pages/course-details/course-details.component";
import FacultyMaintenance from "./pages/admin/faculty-maint/faculty-maint.component";
import FacultyForm from "./pages/admin/faculty-maint/faculty-form.component";
import FacultyAddForm from "./pages/admin/faculty-maint/faculty-add-form.component";
import CourseMaintenance from "./pages/admin/course-maint/course-maint.component";
import CourseAddForm from "./pages/admin/course-maint/course-add-form.component";

import "./App.css";

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      console.log("no token, going to Sign In component");
      navigate("/sign-in");
    }
  }, [token]);

  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/courses" element={<FacultyCourses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />

          <Route path="/faculty-maint" element={<FacultyMaintenance />} />
          <Route path="/faculty-maint/:id" element={<FacultyForm />} />
          <Route path="/faculty-maint/add" element={<FacultyAddForm />} />

          <Route path="/courses-maint/:facultyId" element={<CourseMaintenance />} />
          <Route path="/courses-maint/add/:facultyId" element={<CourseAddForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
