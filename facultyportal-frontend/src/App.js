import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navigation from "./pages/navigation/navigation.component";
import Home from "./pages/home/home.component";
import SignIn from "./pages/sign-in/sign-in.component";
import FacultyCourses from "./pages/faculty-courses/faculty-courses.component";
import CourseDetails from "./pages/course-details/course-details.component";
import useToken from "./services/use-token";

function App() {
  const { token, setToken } = useToken();

  // Display Sign In component if there is no token
  if (!token) {
    console.log("no token, going to Sign In")
    return <SignIn setToken={setToken} />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/faculty-courses" element={<FacultyCourses />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
