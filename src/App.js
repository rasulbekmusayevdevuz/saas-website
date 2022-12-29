import './App.css';
// import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
function App() {
  return (
    <>
     <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/' />
          <Route path='/' />
        </Routes>
      </Router>
    </>
  );
}
export default App;