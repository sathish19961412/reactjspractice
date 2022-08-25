// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
import Contacts from './Contact';
import Contactus from './sentmail';
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contacts/>}></Route>
            <Route path='/contact1' element={<Contactus/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
