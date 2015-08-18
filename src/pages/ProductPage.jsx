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
  static defaultProps = {
    ShopStore: dispatcher.stores.ShopStore.getState()
  }

  static contextTypes = State.contextTypes

  componentWillMount(){
    let product = this.context.router.getCurrentParams().product;

    if (!this.props.ProductStore.get(product)) {
      let params = {
        accountName: this.props.ShopStore.get('accountName'),
        product: product
      };
      dispatcher.actions.SearchActions.requestSearch(params);
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
