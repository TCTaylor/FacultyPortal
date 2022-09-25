import React, { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import Navigation from './pages/navigation/navigation.component';
import Home from './pages/home/home.component';
import SignIn from './pages/sign-in/sign-in.component';
import FacultyCourses from './pages/faculty-courses';
import CourseDetails from './pages/course-details';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import api from './api/agent';

function App() {

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
