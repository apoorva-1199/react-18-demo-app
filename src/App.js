import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MyProgress from './components/MyProgress';
import GradebookDashboard from "./components/GradebookDashboard";
import './App.css';
import styled from 'styled-components';



const StyledHeading = styled.h2`        
background: ${props => props.theme.palette.primary.dark};
color: ${props => props.theme.palette.secondary.light};
font-size: ${props => props.theme.typography.h2.fontSize};
padding: 10px 20px;
`;


function App() {
  return (
    <Router>
      <div>
        <StyledHeading>React 18 Demo App</StyledHeading>
        <nav>
          <ul>
            <li><Link to={'/'} className="App-link">Gradebook Dashboard</Link></li>
            <li><Link to={'/my-progress'} className="App-link">My Progress</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route exact path='/' component={GradebookDashboard} />
          <Route path='/my-progress' component={MyProgress} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
