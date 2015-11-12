import React from 'react';
import Slider from 'react-slick';
import 'utils/slick/slick.css';
import 'utils/slick/slick-theme.css';
import { utils } from 'sdk';

let { Img } = utils;

class ProductImage extends React.Component {
  render() {
    let images = this.props.images;

    return (
      <div>
        <div className="row-fluid">
          <Slider
            dots={false}
            infinite={false}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}>
              {
                images.map(function(img) {
                  return (
                    <div className="v-product__photo-caroussel" key={img.src}>
                      <Img className="v-product__photo" src={img.src} width={600} height={600} />
                    </div>
                  );
                }, this)
              }
          </Slider>
        </div>
        <div className="row-fluid">
          <Slider
            dots={false}
            infinite={false}
            speed={500}
            variableWidth={true}
            swipe={true}
            swipeToSlide={true}>
              {
                images.map(function(img) {
                  return (
                    <div className="v-product__thumbnail-caroussel" key={img.src}>
                      <Img className="v-product__thumbnail" src={img.src} width={50} height={50} />
                    </div>
                  );
                }, this)
              }
          </Slider>
        </div>
      </div>
    );
  }
}

export default ProductImage;
