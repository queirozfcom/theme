import React from 'react';
import style from 'styles/components/shelf/Product.less'; // eslint-disable-line

class Product extends React.Component {
  render() {
    let product = this.props.product;
    let display = this.props.isVisible ? 'block' : 'none';

    return (
      <div className="v-shelf__product col-xs-12" style={{display: display}}>
        <img className="v-shelf__product-photo" src={product.image}/>
        <p className="v-shelf__product-title">{product.name}</p>
        <p className="v-shelf__product-price">{product.price}</p>
        <div className="v-btn btn btn-block">
          <p>Adicionar ao carrinho</p>
        </div>
      </div>
    );
  }
}

export default Product;
