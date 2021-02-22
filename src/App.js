import './styles/index.scss';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import MainFrame from './MainFrame';
import DashboardPage from './pages/DashboardPage';


function App() {
  return (
    <div className="App">

      <Router>
        <MainFrame>
          <Switch>

            <Route exact path="/" component={DashboardPage} />
            <Redirect to='/' />

          </Switch>
        </MainFrame>
      </Router>
    </div>
  );
}

export default App;
