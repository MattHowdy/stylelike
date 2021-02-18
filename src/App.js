import './styles/index.scss';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import MainFrame from './MainFrame';
import DashboardPage from './pages/DashboardPage';
import CampaignPage from './pages/CampaignPage';
import InfluencerPage from './pages/InfluencerPage';
import StatisticsPage from './pages/StatisticsPage';

function App() {
  return (
    <div className="App">

      <Router>
        <MainFrame>
          <Switch>

            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/campaings" component={CampaignPage} />
            <Route exact path="/influencers" component={InfluencerPage} />
            <Route exact path="/statistics" component={StatisticsPage} />

            <Redirect to='/' />

          </Switch>
        </MainFrame>
      </Router>
    </div>
  );
}

export default App;
