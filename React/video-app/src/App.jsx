import './App.css'
import ReactPlayer from "react-player/youtube";
import BirdCalls from './BirdCalls';

const App = () => {
  return (
    <div>
      <MyVideo />
      <div>
        <BirdCalls />
      </div>
    </div>
  );
};

const MyVideo = () => {
  const vidUrl = 'https://www.youtube.com/watch?v=BmCHASHzcfI'
  return (
    <div>
      <h1>Intercepting Pattern - Rebiogenesis (2020)</h1>
      <ReactPlayer url={vidUrl} playing={false} volume={0.8} />
    </div>
  );
};

export default App;