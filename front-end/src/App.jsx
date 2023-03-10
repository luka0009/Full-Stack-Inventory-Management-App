import {BrowserRouter, Routes, Route,} from 'react-router-dom'; 
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        
        <Route
          path="/dashboard"
          element={
            <Sidebar>
              <Layout>
                <Dashboard />
              </Layout>
            </Sidebar>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
