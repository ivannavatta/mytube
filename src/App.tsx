import './App.css';
import VideoContainer from './ui/components/createVideo/VideoContainer';
import LoginContainer from './ui/components/login/LoginContainer';
import UserContainer from './ui/components/register/UserContainer';

function App() {
  return (
    <div className="App">
     {/* <UserContainer/>
     <LoginContainer/> */}
     <VideoContainer/>
    </div>
  );
}

export default App;
