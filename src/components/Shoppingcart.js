import React from 'react'
import { IconButton, Badge } from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { useCartContext } from './context/CartContext'


const Shoppingcart = () => {
    const {cart} = useCartContext();
    return (
        <div>
            <IconButton  aria-label="cart">
                <Badge badgeContent={cart.length} color="primary">
                    <NavLink to="/cart"><ShoppingCart className='text-white' /></NavLink>
                </Badge>
            </IconButton>
        </div>
    )
}

export default Shoppingcart