import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useInsertionEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const[userYn, setUserYn] = useState(false);
  useEffect(() => {
    console.log("userYn : ", userYn);
  }, [userYn])
  return (
    <div>
      <Navbar userYn={userYn} setUserYn={setUserYn} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setUserYn={setUserYn} />} />
        <Route path="/product/:id" element={<PrivateRoute userYn={userYn} />} />
      </Routes>
    </div>
  );
}


export default App;
