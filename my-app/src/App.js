import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import all from './component/all';
import add from './component/add';
import Edit from './component/Edit';

function App() {
  return (
  <>
  <Router>
       <Navbar/>
        <Switch>
            <Route path='/' exact component ={Home}/>
            <Route path='/all' component={all}/>
            <Route path='/add' component={add}/>
            {/* <Route component={Link} to={`/edit/${user._id}`} */}
            <Route path="/edit/:id" component={Edit} />
        </Switch>

        </Router>
  </>
  );
}

export default App;
