// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './frameworks/ui/components/Navbar/Navbar';
import Sidebar from './frameworks/ui/components/Sidebar/Sidebar';
import LoginPage from './frameworks/ui/pages/Login.page';
import VideoPage from './frameworks/ui/pages/Video.page';
import RegisterPage from './frameworks/ui/pages/Register.page';
import HomePage from './frameworks/ui/pages/Home.page';
import VideoInfo from './frameworks/ui/components/videoDetails/VideoInfo';
import { UserProvider } from './domain/context/userContext.context';
import { VideoProvider } from './domain/context/videoContext.context';
import { ChannelPage } from './frameworks/ui/pages/Channel.page';

function App() {
  return (
    <BrowserRouter>
    <UserProvider>
    <VideoProvider>

      <div className="app-container">
        <MyNavbar />
        <Routes>
          <Route
            path="/login"
            element={
              <LoginPage/>
            }
          />
          <Route
            path="/upload"
            element={
              <VideoPage/>
            }
          />
          <Route
            path="/signup"
            element={
              <RegisterPage/>
            }
          />
          <Route
            path="/"
            element={
              <HomePage/>
            }
          />
          <Route
            path="/watch"
            element={
              <VideoInfo/>
            }
          />
          <Route
            path="/channel"
            element={
              <ChannelPage/>
            }
          />
        </Routes>
        <Sidebar />
      </div>
    </VideoProvider>


    </UserProvider>
    </BrowserRouter>
  );
}

export default App;

