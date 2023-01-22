import Products from './components/Products';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Addproduct from './components/Addproduct';
import Cart from './components/Cart';
import Details from './components/Details';
import store from './app/store';


function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Products />
        <Routes>

          <Route exact path="/addproduct" element={<Addproduct />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path='/details/:id' element={<Details data={store} />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
