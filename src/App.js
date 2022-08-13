import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';
import Details from './Pages/Details';
import Favlist from './Pages/Favlist';

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
