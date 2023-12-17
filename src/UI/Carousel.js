import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel  showArrows={false} showStatus={false} showIndicators={false}>
                <div>
                    <img alt='product-img' src={this.props.img} />
                    
                </div>
                <div>
                    <img alt='product-img' src="https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?w=360" />
                    
                </div>
                <div>
                    <img alt='product-img' src="https://databox.com/wp-content/themes/databox/inc/img/templates/ecommerce.jpg" />
                    
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;