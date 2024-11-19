import React from 'react';
import './App.css'
import ReactPlayer from 'react-player';


import Nav from './nav.jsx';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Classroom from './components/classroom.jsx';
import Timetable from './components/timetable.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './components/notes.jsx';


function App() {
  return (
    <>
  
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* {!hideNavbarRoutes.includes(Login.login.jsx) && <Navbar />} */}
          
          <Route path="/classroom" element={<Classroom/>}></Route>
          <Route path='/timetable' element={<Timetable/>}></Route>
          <Route path='/notes' element={<Notes/>}></Route>

          <Route path="/login" element={<Login />} />
          

          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
      
      

      </>
  );
}

export default App;