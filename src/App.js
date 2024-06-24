import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './pages/Signin/sign_in';
import Home from './pages/Lecturer/Home/lecturer-home';




function App() {
  return (
    //Routing
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        {/* Lecturer routing */}
        <Route path='lectureh' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
