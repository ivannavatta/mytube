import './App.css';
import LoginContainer from './ui/components/login/LoginContainer';
import UserContainer from './ui/components/register/UserContainer';

function App() {
  return (
    <div className="App">
     <UserContainer/>
     <LoginContainer/>
    </div>
  );
}

export default App;
