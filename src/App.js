import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './pages/Signin/sign_in';
import Home from './pages/Lecturer/Home/lecturer-home';
import Admin_home from "./pages/Admin/admin_home"
import Users from "./pages/Admin/users/Users"
// import "/users.css"




function App() {
  return (
    //Routing
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        {/* Lecturer routing */}
        <Route path='lectureh' element={<Home />} />
        <Route path='admin' element={<Admin_home />} />
        <Route path='list' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
