import './App.css';
import InputComponent from './components/InputComponent';
import RegisterForm from './components/RegisterForm';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';
import FruitApp from './components/FruitApp/FruitApp';
import CurrentImage from './components/CurrentImage';
import LogInOutButton from './components/LogInOutButton';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <InputComponent />
      <RegisterForm />
      <TextInputWithFocusButton />
      <FruitApp />
      <div className='Field1'>
        <p>This section calculates the time of the day and is conditionally rendered: </p>
        <p>(see "CurrentImage"-Component for more examples)</p>
        <CurrentImage />
      </div>
      <div  className="Field2">
      <p>This is a non-functional Login/Logout switch:</p>
      <LogInOutButton isLoggedIn={false} />
      </div>
      <Calculator />
    </div>
  );
}

export default App;
