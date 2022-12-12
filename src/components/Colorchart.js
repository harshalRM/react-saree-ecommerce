import React from 'react'
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { useCartContext } from './context/CartContext';


const Colorchart = ({ product, id }) => {
  const { addToCart } = useCartContext();
  const { colors, sizes, quantity } = product;
  const [color, setColor] = useState();
  const [sizesaree, setSareeSize] = useState();
  const [sareequantity, setSareeQuantity] = useState();

  return (
    <>
    <div className='container'>
      <p>
        Colors:
        {colors.map((currColor) => {
          return (
            <button
              key={id}
              style={{ backgroundColor: currColor }}
              className={color === currColor ? "button active" : "button"}
              onClick={() => setColor(currColor)}>
              {color === currColor ? <FaCheck className='text-white fw-bold' /> : null}
            </button>
          )
        })}
      </p>
      <p>
        Sizes:
        {sizes.map((size) => {
          return (
            <button
              className={sizesaree === size ? "size-button size-active" : "size-button"}
              onClick={() => setSareeSize(size)}
            >{size}
            </button>
          )
        })}
      </p>
      <p>
        Quantity:
        {quantity.map((quant) => {
          return (
            <button
              className={sareequantity === quant ? "quantity-button quantity-active" : "quantity-button"}
              onClick={() => setSareeQuantity(quant)}
            >{quant}
            </button>
          )
        })}
      </p>
      <hr />
      <div className='button-group my-4' onClick={() => addToCart(id, color, product,sizesaree,sareequantity)}>
        <NavLink to='/cart' className='btn btn-primary mx-2 p-2 fw-bold'>ADD TO CART</NavLink>
        <button className='btn btn-danger p-2 fw-bold'>BUY NOW</button>
      </div>
    </div>
    </>
  )
}

export default Colorchart