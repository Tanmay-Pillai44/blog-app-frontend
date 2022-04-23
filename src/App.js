import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>} />
          <Route  path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
