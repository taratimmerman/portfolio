import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Work from './components/Work';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>

      <>

        <Navbar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/work">
            <Work />
          </Route>

          <Route path="/">

          </Route>

        </Switch>

        <Footer />

      </>

    </Router>
  );
}

export default App;