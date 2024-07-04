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
import ProfileUpdate from "./pages/Lecturer/Profile/ProfileUpdate"

//ADMIN
import Admin_home from "./pages/Admin/admin_home"
import Users from "./pages/Admin/users/Users"
import Invoice from './pages/Admin/invoices/Invoice';
import Invoice_t from './pages/Admin/invoices/invoices_table';
import Disputes_a from './pages/Admin/disputes/Disputes_a';
import S_Disputes from './pages/Lecturer/Disputes/send_dispute'

//FINANCE
import Finance from './pages/Finance/finance_home';




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
        <Route path='profile-update' element={<ProfileUpdate />} />
        <Route path='s_disputes' element={<S_Disputes />} />

        {/* ADMIN ROUTING */}
        <Route path='list' element={<Admin_home />} />
        <Route path='users' element={<Users />} />
        <Route path='invoices' element={<Invoice />} />
        <Route path='invoices_t' element={<Invoice_t />} />
        <Route path='disputes_a' element={<Disputes_a />} />

        {/* Finance */}
        <Route path='finance' element={<Finance />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
