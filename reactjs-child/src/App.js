import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <>
      <BrowserRouter basename="/react">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/dashboard"><Dashboard /></Route>
          <Route path="*"><NoMatch /></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
