import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './assets/Componets/Pages/Dashboard/Dashboard';
import { useSelector } from 'react-redux';
import { Loginpage } from './assets/Componets/Pages/Login/Login';
import Header from './assets/Componets/Header/Header';
import Sidebar from './assets/Componets/Sidebar/Sidebar';
import Cources from './assets/Componets/Pages/Cources/Cources';
import Assignments from './assets/Componets/Pages/Assignments/Assignments';
import Exams from './assets/Componets/Pages/Exams/Exams';
import Profile from './assets/Componets/Pages/Profile/Profile';
import Coursedetails from './assets/Componets/Pages/coursedetails/Coursedetails';
import Studentdashboard from './assets/Componets/Studentpages/Studentdashboard/Studentdashboard';
import StudentCources from './assets/Componets/Studentpages/StudentCources/StudentCources';
import StudentAssignments from './assets/Componets/Studentpages/StudentAssignments/StudentAssignments';
import StudentExams from './assets/Componets/Studentpages/StudentExams/StudentExams';



const Routesfile = () => {
  const {isloggedin,type:usertype,name} = useSelector((state) => state.Authentication);
  const e = useSelector((state) => state.Authentication);
  // const usertype = useSelector((state) => state.Authentication.type);
  useEffect(() => {
    // console.log(name,isloggedin,type);
    // console.log(e);
  }, [isloggedin,usertype,name])

  return (
    <>
      {isloggedin && <><Header />
        <Sidebar /></>}
      <Routes>
        {
          isloggedin ?
            usertype === "faculty"?
             [
              <Route key={"Dashboard"} path='/' element={<Dashboard />} />,
              <Route key={"Cources"} path='/Cources' element={<Cources />} />,
              <Route key={"coursedetails"} path='/coursedetails' element={<Coursedetails />} />,
              <Route key={"Assignments"} path="/Assignments" element={<Assignments />} />,
              <Route key={"Exams"} path="/Exams" element={<Exams />} />,
              <Route key={"Profile"} path="/Profile" element={<Profile />} />,
              <Route key="global" path='*' element={<Dashboard />} />
            ] 
            : [
              <Route key={"Studentdashboard"} path='/' element={<Studentdashboard />} />,
              <Route key={"StudentCources"} path='/Cources' element={<StudentCources />} />,
              // <Route key={"coursedetails"} path='/coursedetails' element={<Coursedetails />} />,
              <Route key={"StudentAssignments"} path="/Assignments" element={<StudentAssignments />} />,
              <Route key={"StudentExams"} path="/Exams" element={<StudentExams />} />,
              <Route key={"Profile"} path="/Profile" element={<Profile />} />,
              <Route key="global" path='*' element={<Studentdashboard />} />
            ]

            : <Route path='*' element={<Loginpage />} />
        }
      </Routes>
    </>
  );
};

export default Routesfile;