import React from 'react';
import kebabCase from 'lodash/string/kebabCase';
import Style from './Title.less'; // eslint-disable-line

let ProductTitle = React.createClass({
  render() {
    let product = this.props.product;
    let brandURL = '/' + kebabCase(product.brand.slug) + '/b';

    let currentSku = this.props.currentSku ? this.props.currentSku : 0;
    let skuName = this.props.product.skus[currentSku].name;
    return (
      <div className="ds-product-title">
        <h1 className="ds-product-name">{product.name} - {skuName}</h1>
        <div className="ds-brand">
          por <a title={product.brand.name} href={brandURL}>{product.brand.name}</a>
        </div>
      </div>
    );
  }
});

export default ProductTitle;
