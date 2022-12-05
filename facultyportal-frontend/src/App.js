import React, { useEffect } from "react";
import { Routes, Route, useNavigate, } from "react-router-dom";
import { ROLES } from "./features/roles";
import RequireAuth from "./features/require-auth";

import Navigation from "./pages/navigation/navigation.component";
import Home from "./pages/home/home.component";
import SignIn from "./pages/sign-in/sign-in.component";
import PasswordReset from "./pages/password-reset/password-reset-component";
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
      navigate("/sign-in");
    }
  }, [token, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/pw-reset" element={<PasswordReset />} />
        
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.isReadOnly]} />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<FacultyCourses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
          </Route>
          
          <Route element={<RequireAuth allowedRoles={[ROLES.isEditor, ROLES.isAdmin]} />}>
            <Route path="/faculty-maint" element={<FacultyMaintenance />} />
            <Route path="/faculty-maint/:id" element={<FacultyForm />} />
            <Route path="/faculty-maint/add" element={<FacultyAddForm />} />
            <Route path="/courses-maint/:facultyId" element={<CourseMaintenance />} />
            <Route path="/courses-maint/add/:facultyId" element={<CourseAddForm />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
