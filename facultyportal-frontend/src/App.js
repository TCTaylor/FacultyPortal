import React, { useState } from 'react';
import Navigation from './pages/navigation/navigation.component';
import Home from './pages/home/home.component';
import SignIn from './pages/sign-in/sign-in.component';
import FacultyCourses from './pages/faculty-courses';
import CourseDetails from './pages/course-details';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  //const [token, setToken] = useState();

  //if(!token) {
 //   return <SignIn setToken={setToken}/>
 // }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {< Navigation />}>
          <Route index element = {< Home />}/>  
          <Route path='/faculty-courses' element = {< FacultyCourses />}/>  
          <Route path='/course-details' element = {< CourseDetails />}/> 
          <Route path='/sign-in' element = {< SignIn />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
