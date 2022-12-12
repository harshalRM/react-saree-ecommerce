import React from 'react'
import { NavLink } from 'react-router-dom'

import Shoppingcart from './Shoppingcart'


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-4">
                <div className="container">
                    <h1 className="display-4 text-white fw-bold title">Glamaree</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-4">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Shoppingcart/>
                </div>
            </nav>
        </>
    )
}

export default Header