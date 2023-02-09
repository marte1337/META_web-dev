import './App.css';
import InputComponent from './components/InputComponent';
import RegisterForm from './components/RegisterForm';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';
import FruitApp from './components/FruitApp/FruitApp';

function App() {
  return (
    <div className="App">
      <InputComponent />
      <RegisterForm />
      <TextInputWithFocusButton />
      <FruitApp />
    </div>
  );
}

export default App;
