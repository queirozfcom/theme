import React from 'react';
import { stores, actions, utils } from 'sdk';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Newsletter from 'components/Newsletter/Newsletter';
import './ProductPage.less';
import Product from 'components/Product/Product';
import RecomendationShelf from 'react-proxy?name=RecomendationShelf!components/Shelf/RecomendationShelf'

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
        <RecomendationShelf/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default ProductPage;
