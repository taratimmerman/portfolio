import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

function App() {
  return (
    <Router>

      <AppContainer>

        <Navbar />

        <Switch>
          <Route path="/about">

          </Route>
          
          <Route path="/">

          </Route>
        </Switch>

      </AppContainer>

    </Router>
  );
}

export default App;

// STYLED COMPONENTS BELOW:

const AppContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
`;