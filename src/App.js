import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banarasi from './components/Banarasi';
import Cart from './components/Cart';
import Category from './components/Category';
import Checkout from './components/Checkout';
import Chiffon from './components/Chiffon';
import Cotton from './components/Cotton';
import Footer from './components/Footer';
import Georgette from './components/Georgette';
import Header from './components/Header';
import Home from './components/Home';
import Net from './components/Net';
import Silk from './components/Silk';

function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/banarasi" element={<Banarasi />} />
        <Route path="/cotton" element={<Cotton />} />
        <Route path="/georgette" element={<Georgette />} />
        <Route path="/silk" element={<Silk />} />
        <Route path="/chiffon" element={<Chiffon />} />
        <Route path="/net" element={<Net />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/check" element={<Checkout />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
