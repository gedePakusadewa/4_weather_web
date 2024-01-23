import React from 'react';
import Home from './page/Home.js';
import About from './page/About.js';
import LogIn from './page/LogIn.js';
import SignUp from './page/SignUp.js';
import AuthProvider from './helper/Authentication.js';
import ProtectedRoute from './helper/ProtectedRoute.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

export const AuthContext = React.createContext(null);

function App() {
  return (
    <>
      <BrowserRouter>      
        <AuthProvider> 
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute> 
            }/>
            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute> 
            }/>
            <Route path="/about" element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute> 
            }/>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
