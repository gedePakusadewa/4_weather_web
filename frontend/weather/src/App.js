import React from 'react';
import Navbar from "./component/NavBar.js";
import Dashboard from './page/Dashboard.js';
import Settings from './page/Settings.js';
import Profile from './page/Profile.js';
import LogIn from './page/LogIn.js';
import SignUp from './page/SignUp.js';
import AuthProvider from './helper/Authentication.js';
import ProtectedRoute from './helper/ProtectedRoute.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';

export const AuthContext = React.createContext(null);

library.add(fas)

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>      
        <AuthProvider> 
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute> 
            }/>
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute> 
            }/>
            <Route path="/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute> 
            }/>
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute> 
            }/>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
