import './App.css';
import Header from './components/nav';
import Profile from './components/profile';

function App() {
  return (
    <div className='App'>
      <Header />
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/createbet" element={<CreateBet />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
=======
>>>>>>> origin/main
    </div>
  );
}

export default App;
