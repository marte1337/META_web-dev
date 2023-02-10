
const LogoutButton = () => <button>Logout</button>

const LoginButton = () => <button>Login</button>


function LogInOutButton(props) {
    const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
      return <LogoutButton />;
      } else {
      return <LoginButton />;
    }
}

export default LogInOutButton

// Funktioniert noch nicht