import React from 'react';
import 'styles/components/checkout/Checkout.less';

class Checkout extends React.Component {
  render() {
    return (
      <div className="row v-dream__checkout-wrapper">
        <div className="col-xs-12">
          <button className="v-dream__checkout-button">Adicionar ao carrinho</button>
        </div>
      </div>
    )
  }
}

export default Checkout;
