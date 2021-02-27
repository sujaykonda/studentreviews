import logo from './logo.png';
import './App.css';
import NameForm from './Form';

function App(){
  return (
    <div className="App">

      <h1> <img src={logo} alt="dogeclassroom" width="90" height="67.5"></img> DogeClassrome</h1>
      <header className="App-header">
       <div><NameForm /></div>
      </header>
    </div>
  );
}

export default App;
