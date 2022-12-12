import React from 'react'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai'

const Star = ({star}) => {

 const rating =  Array.from({length:5}, (elem, index)=>{
    let number = index + 0.5;
    return(
        <span key={index}>
            {
                star >= index + 1 ? <FaStar className='stars'/> :star >= number ?<FaStarHalfAlt className='stars'/>  :<AiOutlineStar className='stars'/> 
            }
        </span>
    )
  });

  return (
    <div>
        <div className='container'>
            {rating}
        </div>
    </div>
  )
}

export default Star