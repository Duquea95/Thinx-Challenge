import React from 'react';
import Bottom1 from '../images/pdpBottom/thinx_productpage_-04.jpg';
import Bottom2 from '../images/pdpBottom/thinx_productpage_-03.jpg';
import Bottom3 from '../images/pdpBottom/thinx_productpage_-05.jpg';
import Bottom4 from '../images/pdpBottom/thinx_productpage_-07.jpg';
import Bottom5 from '../images/pdpBottom/thinx_productpage_-08.jpg';

const PdpBottom = () => {

    return(
        <div className="pdp-related-products">
          <div className="row">
            <div className="column full-width">
              <div className="row pdp-related-products__section">
                <div className="column column-6 pdp-related-product-left">
                  <div>
                    <div>
                      <img className="pdp-related-product-image__horizontal" src={Bottom1}/>
                    </div>
                    <div>
                      <span>Shop Hiphugger</span>
                    </div>
                    <div>
                      <span>heavy days</span>
                    </div>
                  </div>
                </div>
                <div className="column column-6 pdp-related-product-right">
                  <div>
                    <div>
                      <img className="pdp-related-product-image__vertical" src={Bottom2}/>
                    </div>
                    <div>
                      <span>Shop Cheeky</span>
                    </div>
                    <div>
                      <span>light days</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pdp-related-products__section">
                <div className="column full-width pdp-related-product">
                  <div>
                    <div>
                      <img className="pdp-related-product-image__horizontal" src={Bottom3}/>
                    </div>
                    <div>
                      <span>Shop Thong</span>
                    </div>
                    <div>
                      <span>lightest days</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pdp-related-products__section">
                <div className="column column-6 pdp-related-product-left">
                  <div>
                    <div>
                      <img className="pdp-related-product-image__horizontal" src={Bottom4}/>
                    </div>
                    <div>
                      <span>Shop Sport</span>
                    </div>
                    <div>
                      <span>medium days</span>
                    </div>
                  </div>
                </div>
                <div className="column column-6 pdp-related-product-right">
                  <div>
                    <div>
                      <img className="pdp-related-product-image__vertical" src={Bottom5}/>
                    </div>
                    <div>
                      <span>Shop Boyshort</span>
                    </div>
                    <div>
                      <span>light days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PdpBottom