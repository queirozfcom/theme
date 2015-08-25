import React from 'react';
import { dispatcher, connectToStores } from 'sdk';
import { State } from 'react-router';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Newsletter from 'components/newsletter/Newsletter';
import 'styles/pages/ProductPage.less';
import Product from 'components/product/Product';

@connectToStores([
  dispatcher.stores.ProductStore
])
class ProductPage extends React.Component {
  static contextTypes = State.contextTypes

  componentWillMount() {
    // TODO fix scroll behavior
    var contentEl = document.getElementsByClassName('v-editor__app-container')[0];
    if (contentEl) {
      contentEl.scrollTop = 0;
    }

    let currentURL = (window.location.pathname + window.location.search);
    if (!dispatcher.stores.ResourceStore.getState().get(currentURL)) {
      let slug = this.context.router.getCurrentParams().slug;
      let params = {
        slug: slug
      };
      dispatcher.actions.ResourceActions.getRouteResources(currentURL, 'product', params);
    }
  }

  render() {
    let slug = this.context.router.getCurrentParams().slug;
    let productData = this.props.ProductStore.get(slug);

    return (
      <div>
        <Header/>
        {productData ? <Product {...productData}/> : <div>Carregando</div>}
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default ProductPage;
