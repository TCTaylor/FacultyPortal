import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, } from "react-router-dom";

import Navigation from "./pages/navigation/navigation.component";
import Home from "./pages/home/home.component";
import SignIn from "./pages/sign-in/sign-in.component";
import FacultyCourses from "./pages/faculty-courses/faculty-courses.component";
import CourseDetails from "./pages/course-details/course-details.component";

//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.min.js";
// import 'semantic-ui-css/semantic.min.css'

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
          <Route path="/courses" element={<FacultyCourses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
