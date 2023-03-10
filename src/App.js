import './globals.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage';


function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter basename='/danilo-von-den-bruener-hoehen'>
          <Navbar />
          <Routes>
            <Route path='/danilo-von-den-bruener-hoehen' element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
