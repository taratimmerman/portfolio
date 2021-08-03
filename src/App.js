import { React, useState } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from './components/About';
import FamilyPromise from './components/FamilyPromise';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TicketPunch from './components/TicketPunch';
import Work from './components/Work';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>

      <>

        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />

        <Switch>
          <Route path="/portfolio/about">
            <About />
          </Route>

          <Route path="/portfolio/work">
              <Work />
          </Route>

          <Route path="/portfolio/ticket-punch">
            <TicketPunch />
          </Route>

          <Route path="/portfolio/family-promise">
            <FamilyPromise />
          </Route>

          <Route path="/portfolio">
            <Home />
          </Route>
        </Switch>

        <Footer />

      </>

    </Router>
  );
}

export default App;