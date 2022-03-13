import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home';

import Products from './components/pages/Products';

// App.js File
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
      <Route path='/'exact component={Home}/>
          
          <Route path='/products' component={Products}/>
          
      </Switch>
    </Router>
    </>
  );
}

export default App;
