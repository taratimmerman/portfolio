import { React, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Work from './components/Work';
import Home from './components/Home';
import FamilyPromise from './components/FamilyPromise';
import TicketPunch from './components/TicketPunch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

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
          <Route path="/about">
            <About />
          </Route>

          <Route path="/work">
            <WorkWrapper>
              <StyledH3>Work</StyledH3>
              <Work />
            </WorkWrapper>
          </Route>

          <Route path="/ticket-punch">
            <TicketPunch />
          </Route>

          <Route path="/family-promise">
            <FamilyPromise />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />

      </>

    </Router>
  );
}

export default App;

// STYLED COMPONENTS BELOW:

const WorkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const StyledH3 = styled.h3`
    margin: 3rem 0;
    color: #404040;
`;