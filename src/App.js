import './globals.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage';


function App() {

  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
