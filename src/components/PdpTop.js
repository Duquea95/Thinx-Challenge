import React from 'react';
import Product1 from '../images/pdpTop/highwaist_black_front_2_1024x1024.jpg';

const PdpTop = () => {

    return(
        <div className="pdp-content container-fluid">
            <div className="row">
                <div className="column full-width">
                    <div className="row">
                        <div className="column full-width">
                            <div className="row align-center">
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
                                        <div className="margin-bottom-l">
                                            <p>$35.00</p>
                                        </div>
                                        <div className="margin-bottom-l">
                                            <div className="row">
                                                <div className="pdp-product-style">Color</div>
                                                <div className="pdp-product-style black-button">Black</div>
                                                <div className="pdp-product-style beige-button">Beige</div>
                                            </div>
                                        </div>
                                        <div className="margin-bottom-l">
                                            <div className="row pdp-product-quantity-button-container">
                                                <div className="pdp-product-quantity-buttons"><p>-</p></div>
                                                <div className="pdp-quantity-input__container"><input className="pdp-product-quantity-input" placeholder="quantity(0)"/></div>
                                                <div className="pdp-product-quantity-buttons"><p>+</p></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="dropdown margin-bottom-l">
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
                                                <button className="pdp-product-cta__atb-button">Add To Cart</button>
                                            </div>
                                            <div>
                                                <p className="underline">build a cycle set and save up to 20%</p>
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