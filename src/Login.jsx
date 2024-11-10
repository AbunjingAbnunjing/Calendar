import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

// Separate components for image and heading
const PanelImage = () => {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHbRsZ-AWHOSjc-r0hcNEAv3iSyppF4v_Fw&s"
      alt="User Icon"
      className="panel-image"
    />
  );
};

const PanelHeading = () => {
  return <h5 className="companyname"> College of the Immaculate Conception</h5>;
};

const Login = ({ setIsAuthenticated, setIsAdmin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isAdminMode, setIsAdminMode] = useState(false); // Control admin mode
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const userCredentials = { email: 'luisbenico', password: '12345' };
    const adminCredentials = { email: 'hanyzelcenon', password: 'qwerty' };

    if (formData.email === userCredentials.email && formData.password === userCredentials.password) {
      setIsAuthenticated(true);
      setIsAdmin(false);
      setModalMessage('User login successful!');
      setShowModal(true);
      setTimeout(() => navigate('/user'), 2000);
    } else if (formData.email === adminCredentials.email && formData.password === adminCredentials.password) {
      setIsAuthenticated(true);
      setIsAdmin(true);
      setModalMessage('Admin login successful!');
      setShowModal(true);
      setTimeout(() => navigate('/admin'), 2000);
    } else {
      setModalMessage('Login failed: Invalid credentials');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <PanelImage />  {/* Use the PanelImage component */}
            <PanelHeading />  {/* Use the PanelHeading component */}
            <button className="btn" onClick={() => setIsAdminMode(false)}>User</button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <button className="btn" onClick={() => setIsAdminMode(true)}>Admin</button>
          </div>
        </div>
      </div>

      {/* User Login Form */}
      {!isAdminMode && (
        <div className="user-login">
          <form onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title1">User</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="email" placeholder="Email" onChange={handleInputChange} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
            </div>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      )}

      {/* Admin Login Form */}
      {isAdminMode && (
        <div className="admin-login">
          <form onSubmit={handleLogin} className="sign-up-form">
            <h2 className="title2">Admin</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="email" placeholder="Email" onChange={handleInputChange} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
            </div>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      )}

      {showModal && (
        <div className="modallogin">
          <div className="modal-content-login">
            <span className="closelogin" onClick={closeModal}>&times;</span>
            <p className="modal-content-loginto">{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
