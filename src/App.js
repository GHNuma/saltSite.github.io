import './App.css';
import Header from './components/header/Header'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Patients from './Pages/Patients'

function App() {
  return (
 <>
  <Router>
    <header>
      <Header/>
      <br/>
    </header>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/auth" element={<Auth/>}/>
      <Route exact path="/patients" element={<Patients/>}/>
    </Routes>
  </Router>
  
  
 </>
  );
}

export default App;