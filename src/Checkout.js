import React from 'react';
import './Checkout.css';
import Pic from './checkoutad.jpg';

function Checkout() {
    return (
        <div className='checkout' >
            <div className="checkout__left" >
                <img className="checkout__ad"
                src={Pic}
                alt=""
                />

                <div>
                    <h2 className="checkout__title" >
                        Your shopping Basket
                    </h2>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                </div>
            </div>

            <div className="checkout__right" >
                <Subtotal/>
            </div>

        </div>
    )
}

export default Checkout;
