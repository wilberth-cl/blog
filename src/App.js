import './App.css';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Algo from './pages/Algo';
import Otro from './pages/Otro';
import Page404 from './pages/Page404';

function App() {
  
  let component;

  switch(window.location.pathname){
    case "/":
      component = <Home />
      break;
    case "/blog":
      component = <Welcome />
      break
    case "/algo":
      component = <Algo />
      break;
    case "/otro":
      component = <Otro />
      break;
    default:
      component = <Page404 />
      break;
  }

  return (
    <div className="mx-auto overflow-hidden">
      <Navbar />  
      {component}
    </div>
  )

}

export default App;
