import React, { useContext } from "react";
import carritoLogo from "../../assets/images/carrito.png";
import "../Navegador/NavBar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
 
    const { totalUnidades } = useContext(CartContext);
    
    return (
        <Link to='/cart'>
            <div>
                <img className="logo-carrito" src={carritoLogo} alt="logo-carrito" />
                <span>{totalUnidades()}</span>
            </div>
        </Link>
    )
};

export default CartWidget;