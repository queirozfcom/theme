import React from 'react';
import './Product.less';
import { stores } from 'sdk';
import AddToCartButton from 'react-proxy?name=AddToCartButton!components/AddToCartButton/AddToCartButton';
import ProductDescription from  './ProductDescription';

const Area = stores.ComponentStore.state.getIn(['Area@vtex.storefront-sdk', 'constructor']);
const Price = stores.ComponentStore.state.getIn(['Price@vtex.storefront-sdk', 'constructor']);

class Product extends React.Component {
  componentWillMount() {
    if (this.props.skus.length === 1) {
      let selectedSku = this.props.skus;

      this.setState({ selectedSku });
    } else {
      this.setState({ selectedSku: [] });
    }
  }

  changeSelectedSku = (selectedSkus) => {
    this.setState({ selectedSku: selectedSkus });
  }

  render() {
    let defaultSku = this.props.skus[0];
    let name = this.props.name;
    let price = defaultSku.offers[0].price; //what if price is different for different skus?
    let skus = this.props.skus;
    let cartValidation = this.state.selectedSku.length === 1 ? true : false;

  //need to create interaction between selected variation and image carousel

    let className = 'AddToCartButton--fixed';

    if (this.state.selectedSku.length === 1) {
      defaultSku = this.state.selectedSku[0];
    }

    return (
      <div className="Product container-fluid">
        <Area id="product/product-image" images={defaultSku.images} />
        <div className="row">
          <div className="col-xs-11 col-xs-offset-1">
            <h2 className="Product__title">{name}</h2>
            <h3 className="Product__price"><Price value={price}/></h3>
          </div>
        </div>
        {
          skus.length > 1 ?
            <Area
              skus={skus}
              changeSelectedSku={this.changeSelectedSku}
              id="product/sku-selector"
            /> : null
        }
        <AddToCartButton
          skuId={defaultSku.id}
          cartValidation={cartValidation}
          className={className}
          id="product-button"
          route="product"
        />
        <ProductDescription />
      </div>
    );
  }
}

export default Product;
