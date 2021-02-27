import logo from './logo.png';
import './App.css';
import EssayForm from './Form';

function App(){
  return (
    <div className="App">

      <h1> <img src={logo} alt="dogeclassroom" width="90" height="67.5"></img> DogeClassrome</h1>
      <header className="App-header">
        <EssayForm />
      </header>
    </div>
  );
}

export default App;
