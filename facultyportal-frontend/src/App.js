import React from 'react';
import Navigation from './pages/navigation/navigation.component';
import Home from './pages/home/home.component';
import SignIn from './pages/sign-in/sign-in.component';
import FacultyCourses from './pages/faculty-courses/faculty-courses.component';
import CourseDetails from './pages/course-details/course-details.component';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {< Navigation />}>
          <Route index element = {< Home />}/>  
          <Route path='/faculty-courses' element = {< FacultyCourses />}/>  
          <Route path='/course-details/:id' element = {< CourseDetails />}/> 
          <Route path='/sign-in' element = {< SignIn />}/>
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
