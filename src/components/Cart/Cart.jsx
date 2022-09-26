import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCart from "../Item/ItemCart";
import "../Cart/Cart.css"


const Cart = () => {
    const { cart, totalPrecio, borrarCart } = useContext(CartContext);

    return (
      <>
        <div>
          <div className="container greeting py-100">

            {cart.length === 0 ? (
              <div className="container cont-cart"> <p>¡ No hay elementos en el carrito !</p>  <Link to="/">Comprar!</Link> </div>
            ) : (
              cart.map(item => <ItemCart key={item.id} item={item}/>)
            )}

          </div>
          <hr />
          <div className="cart-conten">
            <p>
              Total: $ {totalPrecio()}
            </p>
            <button type="button" className="btn btn-danger" onClick={borrarCart}>Vaciar Carrito</button>
          </div>
            
        </div>
      </>
          
    )
  };


export default Cart;
 
