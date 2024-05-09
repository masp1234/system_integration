import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? (
      <>
        <LogoutButton></LogoutButton>
        <Profile></Profile>
      </>
      ) :
      <LoginButton></LoginButton>   
      }
    </div>
  );
}

export default App;
