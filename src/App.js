import Products from './components/Products';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Addproduct from './components/Addproduct';
import Cart from './components/Cart';
import Details from './components/Details';
import store from './assets/store';
import { fetchproducts } from './features/productSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchproducts())
  }, [])
  return (
    <>
      <div className="App">
        <Navbar />
        <div style={{ paddingTop: '100px' }}></div>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/addproduct" element={<Addproduct />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path='/details/:id' element={<Details data={store} />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
