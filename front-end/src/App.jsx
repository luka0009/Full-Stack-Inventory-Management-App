import {BrowserRouter, Routes, Route,} from 'react-router-dom'; 
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/login' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
