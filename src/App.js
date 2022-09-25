import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navegador/NavBar';
import Footer from './components/Footer/Footer';
import CartProvider from './Context/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (

    <CartProvider>
      <BrowserRouter>
      <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detalle/:detalleid" element={<ItemDetailContainer />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;