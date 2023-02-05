import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Edit from './Edit';
import Table from './Table';
import Store from './Store';
import { Provider } from 'react-redux';
import Add from './Add';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <>
    
    {/* NavBar */}
    <Navbar />
    <Provider store={Store}>
    <Routes>
    {/* Home  */}
    <Route path='/' element={<Table />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
    {/* Edit  */}
    <Route path='/editStudent' element={<Edit/>}/>
    <Route path='/addStudent' element={<Add/>}/>
    </Routes>
    </Provider>
    </>
  );
}

export default App;