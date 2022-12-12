import React from 'react'
import CHIFF from '../ChiffonData'
import Colorchart from './Colorchart';
import Star from './Star';



const Chiffon = () => {
  const cardItem = (item) => {
    return (
      <>
        <div className='col-md-8 col-lg-6 col-xl-4 '>
            <div className='card text-black my-4 '>
                <img src={item.image} alt={item.title} className='card-img-top'/>
                <div className='card-body text-center'>
                    <h5 className='card-title text-truncate fw-bolder'>{item.title}</h5>
                    <p className='lead mb-2 fw-bold'>Rs {item.price}</p>
                    <Star star={item.stars}/>
                    <hr/>
                    <Colorchart product={item} id={item.id}/>
                    <hr/>
                </div>        
            </div>
        </div>
      </>
    );
  }
  return (
    <div className='chiffon'>
      <div className='container py-5'>
        <div className='row justify-content-evenly '>
        {CHIFF.map(cardItem)}
        </div>
      </div>
    </div>
  )
}

export default Chiffon