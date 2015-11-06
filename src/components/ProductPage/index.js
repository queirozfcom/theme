import React from 'react';
import { stores, actions, utils } from 'sdk';
import Footer from 'commons/components/Footer';
import Header from 'commons/components/Header';
import Newsletter from 'commons/components/Newsletter';
import Product from './Product';
import './style.less';

@utils.connectToStores()
class ProductPage extends React.Component {
  static getStores() {
    return [stores.ProductStore];
  }

  static getPropsFromStores(props) {
    return {
      product: stores.ProductStore.getState().get(props.params.slug)
    }
  }

  componentWillMount() {
    // TODO fix scroll behavior
    var contentEl = document.getElementsByClassName('v-editor__app-container')[0];
    if (contentEl) {
      contentEl.scrollTop = 0;
    }

    let currentURL = (window.location.pathname + window.location.search);
    if (!stores.ResourceStore.getState().get(currentURL)) {
      actions.ResourceActions.getRouteResources(currentURL, 'product', this.props.params);
    }
  }

  render() {
    let product = this.props.product;

    return (
      <div>
        <Header/>
        {product ? <Product {...product}/> : <div>Carregando</div>}
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default ProductPage;

actions.ComponentActions.register({
  name: 'ProductPage@vtex.storefront-theme',
  constructor: ProductPage
});
