import { useCartContext } from "./context/CartContext";
import {FaTrash} from 'react-icons/fa'
import { NavLink } from "react-router-dom";



const Cart = () => {
    const { cart} = useCartContext();
    const { removeItem } = useCartContext();

    return (
        <>
            <h1 className="fw-bold text-center my-4 ">PRODUCT CARD</h1>
            <div className="px-4 py-4 my-5 bg-light rounded-3" key={cart.id}>
                <div className="container">
                    <div className="row justify-content-evenly my-3">
                        {
                            cart.map((item) => {
                                return (
                                    <>
                                        <div  key={cart.id}>
                                            <FaTrash className="close-icon"  onClick={() => removeItem(item.id)}/>
                                        </div>
                                            
                                        <div class="card my-3 p-3" style={{ maxWidth: "640px" }}>
                                           
                                            <div class="row no-gutters">
                                                <div class="col-md-4 card-image">
                                                    <img src={item.image} class="card-img" alt="..." />
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <table class="table table-dark table-striped table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Attributes</th>
                                                                    <th scope="col">Description</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">Name</th>
                                                                    <td>{item.title}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">Color</th>
                                                                    <td>{item.color}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">Size</th>
                                                                    <td>{item.sizesaree}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">Quantity</th>
                                                                    <td>{item.sareequantity}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">Sub-Total</th>
                                                                    <td>{item.rate}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                    </>
                                    
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <NavLink to="/check" className='btn btn-outline-primary p-2 fw-bold mx-auto w-50'>
                proceed to checkout
            </NavLink>
                </div>
            </div>
        </>
    );
}

export default Cart