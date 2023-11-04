// import './App.css';
import { React} from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom";
import Nav from './components/Nav'
const App = () => {
  return (
    <>
      <Router>
        <Nav />
      </Router>
    </>
  );
}

export default App;
