import logo from './../logo.svg';
import './../App.css';

function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
          <p className="text-emerald-300">
            Welcome developer friend.
          </p>
      </header>
    </div>
  );
}

export default Welcome;