import logo from './../logo.svg';
import './../App.css';

function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome developer friend.
        </p>
        <a
          className="App-link"
          href="/"
          /* target="_blank" */
          rel="noopener noreferrer"
        >
          Home
        </a>
      </header>
    </div>
  );
}

export default Welcome;