import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import ContactUsPage from './pages/contactus'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contactUs" component={ContactUsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
