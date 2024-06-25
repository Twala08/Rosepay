import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './pages/Signin/sign_in';
import Home from './pages/Lecturer/Home/lecturer-home';
import Disputes from './pages/Lecturer/Disputes/disputes';
import Profile from './pages/Lecturer/Profile/profile';

//ADMIN
import Admin_home from "./pages/Admin/admin_home"
import Users from "./pages/Admin/users/Users"
import Invoice from './pages/Admin/invoices/Invoice';
import Disputes_a from './pages/Admin/disputes/Disputes_a';




function App() {
  return (
    //Routing
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        {/* Lecturer routing */}
        <Route path='lectureh' element={<Home />} />
        <Route path='disputes' element={<Disputes />} />
        <Route path='profile' element={<Profile />} />

        {/* ADMIN ROUTING */}
        <Route path='users' element={<Admin_home />} />
        <Route path='list' element={<Users />} />
        <Route path='invoices' element={<Invoice />} />
        <Route path='disputes_a' element={<Disputes_a />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
