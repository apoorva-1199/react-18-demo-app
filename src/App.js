import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MyProgress from './components/MyProgress';
import GradebookDashboard from "./components/GradebookDashboard";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h2>Welcome to React Router Tutorial</h2>
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
