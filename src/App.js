import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Location from './pages/Location';
import Testimonials from './pages/Testimonials';
import Footer from './components/layout/Footer'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
          <Events />
          <Testimonials />
          <Location />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
