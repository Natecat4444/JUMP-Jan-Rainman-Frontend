import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import react from 'react';
import Login from './components/login';
import Landing from './components/landing';
import SignUp from './components/signup';
import CreateBet from './components/createBet';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/createBet" element={<CreateBet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
