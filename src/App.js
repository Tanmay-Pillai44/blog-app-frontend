import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>} />
          <Route  path='/home' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
