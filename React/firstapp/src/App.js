import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Footer from './components/Footer';
import { Bag, Apples, Pears } from './components/Bag'; // = Named-Export/Import

function Heading(props) {
  return (<div>
          <h1>This is the number { Math.floor(Math.random() * 10) + 1 } heading</h1>
          {props.newLine}
          </div>
  )
  
}



function App() {
  return ( 
    <div className="App"> 
      This is the starting code for "Your first component" ungraded lab 
      <Heading newLine={<h3>This is a new line</h3>}/> 
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
    </div> 
  ); 
} 

export default App;
