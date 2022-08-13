import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Details from './pages/Details';
import Favlist from './pages/Favlist';

function App() {
  return (
    <>
   
      <div className="App">
        <Router>
          <Routes>

            <Route element={<Login />} path="/login" />
            <Route element={<Home />} path="/" />
            <Route element={<Details />} path="/details" />
            <Route element={<Favlist />} path="/Favlist" />

          </Routes>
        </Router>
      </div>
      
    </>
  );
}

export default App;
