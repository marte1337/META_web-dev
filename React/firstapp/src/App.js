import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Footer from './components/Footer';
import { Bag, Apples, Pears } from './components/Bag'; // = Named-Export/Import

//Heading-Component
function Heading(props) {
  return (<div>
          <h1>This is a random number between 1 and 10: { Math.floor(Math.random() * 10) + 1 }</h1>
          {props.newLine}
          </div>
  )
  
}

//You can pass almost any kind of expression as a prop.
const bool = false;
const str1 = "just";

function ExprProps(props) {
  return (
      <div>
          <h2>
              The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}
          </h2>
          <p>The value of the math prop is: <em>{props.math}</em></p>
          <p>The value of the str prop is: <em>{props.str}</em></p>
      </div>
  );
};




function App() {
  return ( 
    <div className="App"> 
      <Heading newLine={<h3>This is a new line via props</h3>}/> 
      <div>
        <Nav />
        <Intro1 />
        <Intro2 />
        <Intro3 />
        <Promo />
        <Footer />
      </div>
      <div>
        <Bag>
          <Apples color="yellow" number="5" />
        </Bag>

        <Bag>
            <Pears friend="Peter" />
        </Bag>

        <Bag>
          <Apples color="green" number="3" />
          <Pears friend="Frank" />
        </Bag>
      </div>
      <div>
        <ExprProps
          toggleBoolean={!bool}
          math={(10 + 20) / 3}
          str={str1 + ' another ' + 'string'}
        />
      </div>
    </div> 
  ); 
} 

export default App;
