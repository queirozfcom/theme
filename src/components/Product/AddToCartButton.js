import React from 'react';
import './AddToCartButton.less';

class Checkout extends React.Component {
  static defaultProps = {
    quantity: 1,
    seller: '1'
  }

  render() {
    let addUrl = `/checkout/cart/add?sku=${this.props.skuId}&qty=${this.props.quantity}&seller=${this.props.seller}&redirect=true&sc=1`;

    return (
      <div className="row v-dream__checkout-wrapper">
        <div className="col-xs-12">
          <a href={addUrl} className="v-dream__checkout-button btn btn-block" onTouchTap={this.props.displayAlert}>Adicionar ao carrinho</a>
        </div>
      </div>
    );
  }
}

export default Checkout;
