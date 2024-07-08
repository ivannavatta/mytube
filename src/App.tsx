// App.tsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './frameworks/ui/components/Navbar/Navbar';
import Sidebar from './frameworks/ui/components/Sidebar/Sidebar';
import LoginPage from './frameworks/ui/pages/Login.page';
import VideoPage from './frameworks/ui/pages/Video.page';
import RegisterPage from './frameworks/ui/pages/Register.page';

function App() {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BrowserRouter>
      <div className="app-container">
        <MyNavbar login={login} />
        <Routes>
          <Route
            path="/login"
            element={
              <LoginPage
                setEmail={setEmail}
                setPassword={setPassword}
                setLogin={setLogin}
                email={email}
                password={password}
              />
            }
          />
          <Route
            path="/upload"
            element={
              <VideoPage
                email={email}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <RegisterPage/>
            }
          />
        </Routes>
        <Sidebar />
        <div className="content">
          {/* Otros componentes */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

