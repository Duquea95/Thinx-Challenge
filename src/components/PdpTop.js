import React, { useState } from 'react';
import ProductImage1 from '../images/pdpTop/highwaist_black_front_2_1024x1024.jpg';
import ProductImage2 from '../images/pdpTop/highwaist_black_front_3_1024x1024.jpg';
import ProductImage3 from '../images/pdpTop/highwaist_black_front_4_1024x1024.jpg';
import ProductImage4 from '../images/pdpTop/highwaist_black_back_1024x1024.jpg';
import ProductImage5 from '../images/pdpTop/highwaist_black_side_1024x1024.jpg';
import DropdownMenu from './DropdownMenu';

const PdpTop = () => {
    const [quantityNumber, setQuantityNumber] = useState(1);
    const [productQuantity, setProductQuantity] = useState("quantity(1)");
    const [isProductBlack, setIsProductBlack] = useState(true);
    const [isProductBeige, setIsProductBeige] = useState(false);
    const [value, setValue] = useState(null);

    const decrementQuantityButton = () => {
        quantityNumber <= 1 ? setQuantityNumber(quantityNumber) : setQuantityNumber(quantityNumber - 1)
        updatedQuantity()
    }
    const incrementQuantityButton = () => {
        quantityNumber >= 9 ? setQuantityNumber(quantityNumber) : setQuantityNumber(quantityNumber + 1);
        updatedQuantity()
    }

    const updatedQuantity = () => {
        setProductQuantity(`quantity(${quantityNumber})`)
    }

    const setStyleBlack = () => {
        setIsProductBlack(true)
        setIsProductBeige(false)
    }
    const setStyleBeige = () => {
        setIsProductBeige(true)
        setIsProductBlack(false)
    }

    const onChange = (val) => {
        console.log(val)
        setValue(val)
    }

    const sizes = [
        {id: 1, name: "xs"},
        {id: 2, name: "s"},
        {id: 3, name: "m"},
        {id: 4, name: "l"},
        {id: 5, name: "xl"},
    ]
    // const sizes = ["xs","s",'m','l','xl']

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
                                            <h1 className="pdp-product-title uppercase">Hi-Waist</h1>
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
                                            <img className="pdp-product-image" src={ProductImage1}/>
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
                                                    <div className="pdp-product-style black-button" onClick={setStyleBlack}><span className={`product-style-button ${isProductBlack ? "active-button" : ""}`}>black</span><span className={`${isProductBlack ? "active-style" : ""}`}></span></div>
                                                    <div className="pdp-product-style beige-button" onClick={setStyleBeige}><span className={`product-style-button ${isProductBeige ? "active-button" : ""}`}>beige</span><span className={`${isProductBeige ? "active-style" : ""}`}></span></div>
                                                </div>
                                            </div>
                                            <div className="margin-bottom-l">
                                                <div className="row pdp-product-quantity-button-container">
                                                    <div className="pdp-product-quantity-buttons" onClick={decrementQuantityButton}><span>-</span></div>
                                                    <div className="pdp-quantity-input__container"><span className="pdp-product-quantity-input">{productQuantity}</span></div>
                                                    <div className="pdp-product-quantity-buttons" onClick={incrementQuantityButton}><span>+</span></div>
                                                </div>
                                            </div>
                                            <div>
                                                <DropdownMenu
                                                options={sizes}
                                                prompt='size'
                                                value={value}
                                                onChange={onChange}
                                                />
                                                {/* <div className="dropdown margin-bottom-s">
                                                    <div>
                                                        <ul 
                                                            className = {`${isSizeDropdown ? "open" : ""}`}
                                                            onClick = {() => setIsSizeDropdown(!isSizeDropdown)}
                                                        >
                                                            <li className={`active ${isSizeDropdown ? "active-border" : ""}`}>size</li>
                                                        </ul> 
                                                            <SizeList/>
                                                            <li className={`${isSizeDropdown ? "" : "hidden"}`} onClick={updateProductSize}>xs</li>
                                                            <li className={`${isSizeDropdown ? "" : "hidden"}`} onClick={updateProductSize}>s</li>
                                                            <li className={`${isSizeDropdown ? "" : "hidden"}`} onClick={updateProductSize}>m</li>
                                                            <li className={`${isSizeDropdown ? "" : "hidden"}`} onClick={updateProductSize}>l</li>
                                                            <li className={`${isSizeDropdown ? "" : "hidden"}`} onClick={updateProductSize}>xl</li>
                                                    </div>
                                                </div> */}
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
                                            <img className="pdp-product-image" src={ProductImage1}/>
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
                                                    <div className="pdp-product-style black-button" onClick={setStyleBlack}><span className={`product-style-button ${isProductBlack ? "active-button" : ""}`}>black</span><span className={`${isProductBlack ? "active-style" : ""}`}></span></div>
                                                    <div className="pdp-product-style beige-button" onClick={setStyleBeige}><span className={`product-style-button ${isProductBeige ? "active-button" : ""}`}>beige</span><span className={`${isProductBeige ? "active-style" : ""}`}></span></div>
                                                </div>
                                            </div>
                                            <div className="margin-bottom-l">
                                                <div className="row pdp-product-quantity-button-container">
                                                    <div className="pdp-product-quantity-buttons" onClick={decrementQuantityButton}>
                                                        <span>-</span>
                                                    </div>
                                                    <div className="pdp-quantity-input__container">
                                                        <span className="pdp-product-quantity-input">{productQuantity}</span>
                                                    </div>
                                                    <div className="pdp-product-quantity-buttons" onClick={incrementQuantityButton}>
                                                        <span>+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="dropdown margin-bottom-s">
                                                    <div>
                                                        {/* <ul 
                                                            onClick = {setIsSizeDropdown(!isSizeDropdown)} 
                                                        >
                                                            <li className="active" disabled>size</li>
                                                            <li className="hidden">xs</li>
                                                            <li className="hidden">s</li>
                                                            <li className="hidden">m</li>
                                                            <li className="hidden">l</li>
                                                            <li className="hidden">xl</li>
                                                        </ul> */}
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