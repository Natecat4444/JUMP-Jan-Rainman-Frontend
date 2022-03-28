import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import react from 'react';
import Login from './components/login';
import Landing from './components/landing';
import SignUp from './components/signup';
import CreateBet from './components/createBet';
import Header from './components/nav';

function App() {
  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
