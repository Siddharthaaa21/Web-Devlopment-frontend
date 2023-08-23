import './App.css';
import SignIn from './Components/Sign in/Sign_in'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './Components/Sign Up/SignUp';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Sign_in" component={SignIn} />
        <Route path="/SignUp" component={SignUp}/>
      </Switch>
    </Router>
  );
}

export default App;
