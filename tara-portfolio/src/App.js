import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

function App() {
  return (
    <Router>

      <>

        <Navbar />

        <Switch>
          <Route path="/about">
            <About />
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