import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from '../Componets/Pages/Login/Login';

const AuthoriserRoute = ({ Element, path }) => {
  const isAuthenticated = useSelector((state) => state.Authentication.isAuthenticated);

  return (
    <>
    {isAuthenticated ? (
      <Route path={path} element={<Element />} />
    ) : (
      <Navigate to="/login" />
    )}
    </>
    // <Route
    //   path={path}
    //   element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
    // />
  );
};

export default AuthoriserRoute;
