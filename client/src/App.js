import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CRUD_Application from './components/CRUD_Application';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CRUD_Application/>} />
        <Route path='/all' element={<AllUser/>}/>
        <Route path='/add' element={ <AddUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
