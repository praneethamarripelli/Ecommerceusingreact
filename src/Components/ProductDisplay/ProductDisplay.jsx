import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
        <img src={product.image} alt=""></img>
        <img src={product.image} alt=""></img>
        <img src={product.image} alt=""></img>
        <img src={product.image} alt=""></img>
        </div>
        <div className='productdisplay-img'>
        <img className = "productdisplay-main-img" src={product.image} alt=""></img>
        </div>
      </div>
      <div className='productdisplay-right'>
    <h1>{product.name}</h1>
    <div className='productdisplay-right-star'>
    <img src={star_icon} alt=""></img>
    <img src={star_icon} alt=""></img>
    <img src={star_icon} alt=""></img>
    <img src={star_icon} alt=""></img>
    <img src={star_dull_icon.png} alt=""></img>
    <p>(122)</p>
    </div>
    <div className='productdisplay-right-prices'>
    <div className='productdisplay-right-prices-old'>
        ${product.old_price}
    </div>
    <div className='productdisplay-right-prices-new'>
    ${product.new_price}
    </div>
    </div>
    <div className='productdisplay-right-description'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aperiam nihil enim labore, odio autem modi numquam impedit expedita facilis ex 
    dolores quo unde nostrum distinctio mollitia ipsa, adipisci quibusdam?
    </div>
    <div className='productdisplay-right-size'>
    <h1>Select Size</h1>
    <div className='productdisplay-right-sizes'>
    <div>S</div>
    <div>M</div>
    <div>L</div>
    <div>XL</div>
    <div>XXL</div>

    </div>
    </div>
    <button>ADD TO CART</button>
    <p className='Productdisplay-right-category'>
    <span>Category : <span>Womem, T-Shirt, Crop Top</span></span>
    </p>
    <p className='Productdisplay-right-category'>
    <span>Tags : <span>Modern, Latest</span></span>
    </p>
      </div>
    </div>
  )
}

export default ProductDisplay;
