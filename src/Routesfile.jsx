import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './assets/Componets/Pages/Dashboard/Dashboard';
import { useSelector } from 'react-redux';
import { Login } from './assets/Componets/Pages/Login/Login';
import Header from './assets/Componets/Header/Header';
import Sidebar from './assets/Componets/Sidebar/Sidebar';
import Cources from './assets/Componets/Pages/Cources/Cources';
import Assignments from './assets/Componets/Pages/Assignments/Assignments';
import Exams from './assets/Componets/Pages/Exams/Exams';
import Profile from './assets/Componets/Pages/Profile/Profile';

const Routesfile = () => {
  const isAuthenticated = useSelector((state) => state.Authentication.isloggedin);
  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated])

  return (
    <>
      {isAuthenticated && <><Header />
        <Sidebar /></>}
      <Routes>
        {
          isAuthenticated ?
            [
              <Route key={"Dashboard"} path='/' element={<Dashboard />} />,
              <Route key={"Cources"} path='/Cources' element={<Cources />} />,
              <Route key={"Cources"} path="/Assignments" element={<Assignments />} />,
              <Route key={"Exams"} path="/Exams" element={<Exams />} />,
              <Route key={"Profile"} path="/Profile" element={<Profile />} />,
              <Route key="global" path='*' element={<Dashboard />} />
            ]
            : <Route path='*' element={<Login />} />
        }
      </Routes>
    </>
  );
};

export default Routesfile;