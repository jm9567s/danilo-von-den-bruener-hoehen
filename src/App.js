import './globals.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage';


function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter basename='/danilo'>
          <Navbar />
          <Routes>
            <Route path='/danilo' element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
