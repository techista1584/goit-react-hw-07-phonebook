import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../pages/SharedLayout';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';

export const App = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={<SharedLayout/>} />
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/login" element={<LoginPage/>} />
      </Routes>
   </>
  );
};
