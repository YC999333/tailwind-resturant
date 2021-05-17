import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Location from './pages/Location';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import MainMenu from './pages/MainMenu';
import DrinkMenu from './pages/DrinkMenu';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import OnlineOrder from './pages/OnlineOrder'

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
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/main-menu'>
          <MainMenu />
        </Route>
        <Route path='/drink-menu'>
          <DrinkMenu />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/sign-in'>
          <SignIn />
        </Route>
        <Route path='/online-order'>
          <OnlineOrder />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
