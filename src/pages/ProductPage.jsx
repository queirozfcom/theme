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
    let product = this.context.router.getCurrentParams().product;
    let params = {
      slug: product
    };

    if (!dispatcher.stores.ResourceStore.getResources('product', params)) {
      dispatcher.actions.ResourceActions.getRouteResources('product', params);
    }
  }

  render() {
    let product = this.context.router.getCurrentParams().product;
    let productData = this.props.ProductStore.get(product);

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
