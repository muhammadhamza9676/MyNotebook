import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Homee from './components/Homee';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Loginn from './components/Loginn';
import Footer from './components/Footer';



function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })


    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className='my-5'></div>
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Homee showAlert={showAlert} />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/login' element={<Loginn showAlert={showAlert} />} />
              <Route exact path='/signup' element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
