import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const ItemCart = ({ product }) => {
    console.log(product)
    const { removeProduct } = useContext(CartContext);

  return (
    <div className='itemCart'>
        <img src={'/images/' + product.img} alt={product.title} />
        <div>
            <p>Título: {product.name}</p>
            <p>Cantidad: {product.cantidad}</p>
            <p>Precio u.: {product.precio}</p>
            <p>Subtotal: $ {product.cantidad * product.precio}</p>
            <button className='text-black px-3' onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart;