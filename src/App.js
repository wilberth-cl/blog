import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Algo from './pages/Algo';
import Otro from './pages/Otro';
import Nopage from './pages/Nopage';

function App() {
  

  let component;

  switch(window.location.pathname){
    case "/":
      component = <Home />
      break;
    case "/algo":
      component = <Algo />
      break;
    case "/otro":
      component = <Otro />
      break;
    default:
      component = <Nopage />
      break;
  }

  return (
    <>
      <Navbar />  
      {component}
   </>
  )

}

export default App;
