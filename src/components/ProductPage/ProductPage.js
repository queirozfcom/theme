import React from 'react';
import './ProductPage.less';
import Product from 'components/Product/Product';

class ProductPage extends React.Component {
  render() {
    return (
      <div className="ProductPage">
        <div className="ProductPage__wrapper container-fluid">
          {this.props.loading ? <div>Carregando</div> : <Product id={this.props.id} {...this.props.product}/>}
        </div>
      </div>
    );
  }
}

export default ProductPage;
