import React from 'react';
import { stores, actions, utils } from 'sdk';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Newsletter from 'components/Newsletter/Newsletter';
import './ProductPage.less';
import Product from 'components/Product/Product';
import Review from 'components/Review/Review';

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
//  {product.slug == 'produto68' ? > : <div>Carregando</div>}

  render() {
    let product = this.props.product;
    console.log(product);
    return (
      <div>
        <Header/>
        {product ? <Product {...product}/> : <div>Carregando</div>}
        <Newsletter/>
<Review productId='3100841-1'/>
        <Footer/>
      </div>
    );
  }
}

export default ProductPage;
