import React from 'react';

const PdpTop = () => {

    return(
        <div className="pdp-content container-fluid">
            <div className="row">
                <div className="column full-width">
                    <div className="row">
                        <div className="column full-width">
                            <div className="row align-center">
                                <div className="column pdp-product-header__left">
                                <div className="margin-bottom-l">
                                    <h1>Hi - Waist</h1>
                                </div>
                                <div className="margin-bottom-l">
                                    <p>Heavy days. Holds up to 2 tampon's worth.</p>
                                </div>
                                <div className="margin-bottom-l">
                                    <p>The phrase treat "yo self" reaches new belly-button brushing heights with the Hi-Waist, and it's here just in time for cuffing season.</p>
                                </div>
                                </div>
                                <div className="column pdp-product-header__center">
                                <picture>
                                    <img className="pdp-product-image" src="https://raw.githubusercontent.com/shethinx/front-end-challenge/main/assets/top%20section%20images/highwaist_black_front_2_1024x1024.jpg"/>
                                </picture>
                                </div>
                                <div className="column pdp-product-header__right">
                                <div>
                                    <div className="margin-bottom-m">
                                    <p>$35.00</p>
                                    </div>
                                    <div className="margin-bottom-m">
                                    <div className="row">
                                        <div className="pdp-product-style">Color</div>
                                        <div className="pdp-product-style black-button">Black</div>
                                        <div className="pdp-product-style beige-button">Beige</div>
                                    </div>
                                    </div>
                                    <div>
                                    <div className="row pdp-product-quantity-button-container">
                                        <div className="pdp-product-quantity-buttons"><p>-</p></div>
                                        <div><input className="pdp-product-quantity-input"></input></div>
                                        <div className="pdp-product-quantity-buttons"><p>+</p></div>
                                    </div>
                                    </div>
                                    <div>
                                    <div className="dropdown">
                                        <div>
                                        <ul>
                                            <li disabled>size</li>
                                            <li>xs</li>
                                            <li>s</li>
                                            <li>m</li>
                                            <li>l</li>
                                            <li>xl</li>
                                        </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="underline">
                                        what's my size?
                                        </p>
                                    </div>
                                    </div>
                                    <div>
                                    <div>
                                        <button>Add To Cart</button>
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