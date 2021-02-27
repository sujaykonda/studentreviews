import logo from './logo.png';
import './App.css';
import EssayForm from './Form';

function App(){
  return (
    <div className="App">
      <div className="topBar">
      <img className="image" src={logo} alt="dogeclassroom" width="90" height="67.5"></img><h1 className="topBarText"> DogeClassrome</h1>
      </div>
      <div className="App-header">
        <EssayForm />
      </div>
    </div>
  );
}

export default App;
