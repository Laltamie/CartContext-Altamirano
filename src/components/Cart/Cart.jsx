import React, { useContext } from "react"
import { CartContext } from "../../Context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";


const Cart = () => {
    const { cart,  borrarCart } = useContext(CartContext);


  return (
    <>
      {
       cart.map(product => <ItemDetail key={product.id} />) 
      }

        <button className='text-dark px-2' onClick={borrarCart}>Vaciar carrito</button>
   
      
    </>
  )
}


export default Cart;