import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Layout/Navbar';
import Register from './Pages/Register';
import Fetch from './Pages/Fetch';
import Update from './Pages/Update'
import Delete from './Pages/Delete';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Navbar/>
    <Routes>
     <Route path='/register' element={<Register/>}/>
     <Route path='/show' element={<Fetch/>}/>
     <Route path='/update/:taskID' element={<Update/>}/>
     <Route path='/delete/:taskID' element={<Delete/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
