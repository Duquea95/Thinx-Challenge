import React, { useState } from 'react';
import Product1 from '../images/pdpTop/highwaist_black_front_2_1024x1024.jpg';

const PdpTop = () => {

    const [quantityNumber, setQuantityNumber] = useState(1);
    const [quantity, setQuantity] = useState("quantity(1)");

    const decrementQuantityButton = () => {
        quantityNumber <= 1 ? setQuantityNumber(quantityNumber) : setQuantityNumber(quantityNumber - 1)
        updatedQuantity()
    }
    const incrementQuantityButton = () => {
        quantityNumber >= 9 ? setQuantityNumber(quantityNumber) : setQuantityNumber(quantityNumber + 1);
        updatedQuantity()
    }

    const updatedQuantity = () => {
        setQuantity(`quantity(${quantityNumber})`)
    }

    return(
        <div className="pdp-content container-fluid">
            <div className="row">
                <div className="column full-width">
                    <div className="row">
                        <div className="column full-width">
                            <div className="">
                                <div className="pdp-content-desktop align-center">
                                    <div className="column pdp-product-header__left">
                                        <div className="margin-bottom-xl">
                                            <h1>Hi-Waist</h1>
                                        </div>
                                        <div className="margin-bottom-xl">
                                            <p>Heavy days. Holds up to 2 tampon's worth.</p>
                                        </div>
                                        <div className="margin-bottom-xl">
                                            <p>The phrase treat "yo self" reaches new belly-button brushing heights with the Hi-Waist, and it's here just in time for cuffing season.</p>
                                        </div>
                                    </div>
                                    <div className="column pdp-product-header__center">
                                        <picture>
                                            <img className="pdp-product-image" src={Product1}/>
                                        </picture>
                                    </div>
                                    <div className="column pdp-product-header__right">
                                        <div>
                                            <div className="margin-bottom-l pdp-product-price">
                                                <p>$35.00</p>
                                            </div>
                                            <div className="margin-bottom-l">
                                                <div className="row">
                                                    <div className="pdp-product-style"><span className="product-style-button">color</span></div>
                                                    <div className="pdp-product-style black-button"><span className="product-style-button">black</span></div>
                                                    <div className="pdp-product-style beige-button"><span className="product-style-button">beige</span></div>
                                                </div>
                                            </div>
                                            <div className="margin-bottom-l">
                                                <div className="row pdp-product-quantity-button-container">
                                                    <div className="pdp-product-quantity-buttons" onClick={decrementQuantityButton}><span>-</span></div>
                                                    <div className="pdp-quantity-input__container"><span className="pdp-product-quantity-input">{quantity}</span></div>
                                                    <div className="pdp-product-quantity-buttons" onClick={incrementQuantityButton}><span>+</span></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dropdown margin-bottom-s">
                                                    <div>
                                                        <ul>
                                                            <li disabled>size</li>
                                                            <li className="hidden">xs</li>
                                                            <li className="hidden">s</li>
                                                            <li className="hidden">m</li>
                                                            <li className="hidden">l</li>
                                                            <li className="hidden">xl</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="margin-bottom-xxl"> 
                                                    <p className="underline">
                                                    what's my size?
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="margin-bottom-xxl">
                                                    <button className="pdp-product-cta__atb-button">add to cart</button>
                                                </div>
                                                <div>
                                                    <p className="underline">build a cycle set and save up to 20%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pdp-content-mobile">
                                    <div className="column pdp-product-image">
                                        <picture>
                                            <img className="pdp-product-image" src={Product1}/>
                                        </picture>
                                    </div>
                                    <div className="column pdp-product-description">
                                        <div className="margin-bottom-xl">
                                            <h1>Hi-Waist</h1>
                                        </div>
                                        <div className="margin-bottom-xl">
                                            <p>Heavy days. Holds up to 2 tampon's worth.</p>
                                        </div>
                                        <div className="margin-bottom-xl">
                                            <p>The phrase treat "yo self" reaches new belly-button brushing heights with the Hi-Waist, and it's here just in time for cuffing season.</p>
                                        </div>
                                    </div>
                                    <div className="column pdp-product-ctas">
                                        <div>
                                            <div className="margin-bottom-l pdp-product-price">
                                                <p>$35.00</p>
                                            </div>
                                            <div className="margin-bottom-l">
                                                <div className="row">
                                                    <div className="pdp-product-style"><span className="product-style-button">color</span></div>
                                                    <div className="pdp-product-style black-button"><span className="product-style-button">black</span></div>
                                                    <div className="pdp-product-style beige-button"><span className="product-style-button">beige</span></div>
                                                </div>
                                            </div>
                                            <div className="margin-bottom-l">
                                                <div className="row pdp-product-quantity-button-container">
                                                    <div className="pdp-product-quantity-buttons"><p>-</p></div>
                                                    <div className="pdp-quantity-input__container"><input className="pdp-product-quantity-input" placeholder="quantity(1)"/></div>
                                                    <div className="pdp-product-quantity-buttons"><p>+</p></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dropdown margin-bottom-s">
                                                    <div>
                                                        <ul>
                                                            <li disabled>size</li>
                                                            <li className="hidden">xs</li>
                                                            <li className="hidden">s</li>
                                                            <li className="hidden">m</li>
                                                            <li className="hidden">l</li>
                                                            <li className="hidden">xl</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="margin-bottom-xxl"> 
                                                    <p className="underline text-s">
                                                    what's my size?
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="margin-bottom-xxl">
                                                    <button className="pdp-product-cta__atb-button">Add To Cart</button>
                                                </div>
                                                <div>
                                                    <p className="underline text-s pdp-product-promo-text">build a cycle set and save up to 20%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PdpTop