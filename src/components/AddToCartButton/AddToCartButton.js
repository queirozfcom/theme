import React from 'react';
import { stores, actions } from 'sdk';
import { editable } from 'vtex-editor';
import './AddToCartButton.less';

@editable({
  name: 'AddToCartButton@pilateslovers.pilateslovers-theme',
  title: 'Adicionar ao Carrinho'
})
class AddToCartButton extends React.Component {
  static defaultProps = {
    quantity: 1,
    seller: '1'
  }

  componentWillMount() {
    const orderForm = stores.CartStore.getState().get('orderForm');
    const orderFormId = orderForm.orderFormId ? orderForm.orderFormId : '';
    const orderFormItems = orderForm.items ? orderForm.items : [];

    this.setState({
      orderFormId: orderFormId,
      orderFormItems: orderFormItems
    });
    stores.CartStore.listen(this.onChange);
  }

  componentWillUnmount() {
    stores.CartStore.unlisten(this.onChange);
  }

  onChange = (CartStore) => {
    this.setState({ 
      orderFormId: CartStore.get('orderForm').orderFormId,
      orderFormItems: CartStore.get('orderForm').items
    });
  }

  handleClick = () => {
    let product = {
      id: this.props.skuId,
      quantity: this.props.quantity,
      seller: this.props.seller
    };
    actions.CartActions.addToCart(this.state.orderFormId, [product]);
  }

  checkItemInCart = () => {
    return this.state.orderFormItems.find((element) => {
      if ((element.id) === this.props.skuId) {
        return true;
      }
    });
  }

  render() {
    let label = 'Adicionar ao carrinho';
    let color = '#75CCB1';
    let boxShadowColor = '#737373';

    if (this.props.settings) {
      label = this.props.settings.get('label');
      color = this.props.settings.get('color');
      boxShadowColor = this.props.settings.get('boxShadowColor');
    }

    let labelAdded = 'Produto adicionado!';

    if (this.checkItemInCart()) {
      return (
        <button className={`${this.props.className} add-btn`}
                style={{backgroundColor: color, boxShadow: `2px 2px 0px 0px ${boxShadowColor}`}}
                onClick={this.handleClick}
        >
          <a href="/checkout">
            {labelAdded}
          </a>
        </button>
      )
    }

    return (
      <button className={`${this.props.className} add-btn AddToCartButton__text`}
              style={{backgroundColor: color, boxShadow: `2px 2px 0px 0px ${boxShadowColor}`}}
              onClick={this.handleClick}
      >
        {label}
      </button>
    );
  }


}

export default AddToCartButton;
