import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className='p-3'>
            <div className=' container p-5'>
                <div className='row justify-content-between my-4'>
                    <div className=' col-md-4'>
                        <div className='image'>
                            <img src="images/banarasi.webp" className='img-fluid border border-dark border-2' alt='' />
                        </div>
                        <div className='image-text'>
                            <Link to="/banarasi" className='fw-bold  display-3 text-white text '>Banarasi</Link>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='image'>
                            <img src="images/cotton.webp" className='img-fluid border border-dark border-2' alt='' />
                        </div>
                        <div className='image-text '>
                            <Link to="/cotton" className='fw-bold  display-3 text-white text'>Cotton</Link>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='image'>
                            <img src="images/georgette.webp" className='img-fluid border border-dark border-2' alt='' />
                        </div>
                        <div className='image-text '>
                            <Link to="/georgette" className='fw-bold  display-3 text-white text'>Georgette</Link>

                        </div>
                    </div>
                </div>
                <div className='row justify-content-around my-4'>
                    <div className='col-md-4'>
                        <div className='image'>
                            <img src="images/silk.webp" className='img-fluid border border-dark border-2' alt='' />
                        </div>
                        <div className='image-text '>
                            <Link to="/silk" className='fw-bold  display-3 text-white text'>Silk</Link>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='image'>
                            <img src="images/chiffon.webp" className='img-fluid border border-dark border-2' alt='' />
                        </div>
                        <div className='image-text '>
                            <Link to="/chiffon" className='fw-bold  display-3 text-white text'>Chiffon</Link>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='image'>
                            <img src="images/net/net8.jpg" className='img-fluid border border-dark border-2' alt='' />
                        </div>
                        <div className='image-text '>
                            <Link to="/net" className='fw-bold  display-3 text-white text'>Net</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category