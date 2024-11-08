import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login.jsx';
import AdminApp from './admin/Adminapp.jsx';
import UserApp from './user/Userapp.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Routes>
      <Route path="/eventmanager" element={<Login setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />} />
      
      {isAuthenticated && isAdmin ? (
        <Route path="/admin/*" element={<AdminApp />} />
      ) : (
        <Route path="/admin/*" element={<Navigate to="/eventmanager"  />} />
      )}

      {isAuthenticated && !isAdmin ? (
        <Route path="/user/*" element={<UserApp />} />
      ) : (
        <Route path="/user/*" element={<Navigate to="/eventmanager"  />} />
      )}
    </Routes>
  );
};

export default App;
