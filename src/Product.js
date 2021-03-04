import React from 'react';
import "./Product.css";
import Stars from './stars.png';

function Product({ title, image, price, rating }) {
    return (
        <div className="product" >
            <div className="product__info" >
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p> <img src={Stars} /></p>
                    ) )}
                </div>
            </div>

            <img src={image}  alt="" />

            <button>Add to Basket</button>
        </div>
    )
}

export default Product;
