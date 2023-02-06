import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Footer from './components/Footer';
import { Bag, Apples, Pears } from './components/Bag'; // = Named-Export/Import
import Btn from './components/Btn';


function Heading(props) {
  return (<div>
          <h1>This is a random number: { Math.floor(Math.random() * 10) + 1 }</h1>
          {props.newLine}
          <p>And it is {props.date}</p>
          </div>
  )
}



function App() {

  const date = new Date()

  return ( 
    <div className="App">
      <Heading newLine={<h3>This is a new line</h3>} date={date.toLocaleTimeString()}/> 
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
        <Btn />
      </div>
    </div> 
  ); 
} 

export default App;
