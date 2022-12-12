import React from 'react'
import {useState} from "react"


const Quantitychart = ({product, id}) => {
    const {sizes} = product;
    const [sizesaree, setSareeSize] = useState();

  return (
    <div className='container'>
        <p>
            Sizes:
            {
                sizes?.map((size)=>{
                    return(
                        <button 
                        className={sizesaree === size ? "size-button size-active" : "size-button"}
                        onClick={()=>setSareeSize(size)}
                        >{size}
                        </button>
                    )
                })
            }
        </p>
    </div>
  )
}

export default Quantitychart