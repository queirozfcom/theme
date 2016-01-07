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

  changeSelectedSku = (selectedSku) => {
    this.setState({ selectedSku });
  }

  render() {
    let defaultSku = this.state.selectedSku.length === 1 ?
      this.state.selectedSku[0] : this.props.skus[0];
    let name = this.props.name;
    let price = defaultSku.offers[0].price;
    let skus = this.props.skus;
    let cartValidation = this.state.selectedSku.length === 1 ? true : false;
    let className = 'AddToCartButton--fixed';

    return (
      <div className="Product">
        <h2 className="Product__title col-xs-12 col-sm-push-6">{name}</h2>
        <div className=" col-sm-pull-12">
          <Area id="product/product-image" images={defaultSku.images} />
        </div>
        <h3 className="Product__price"><Price value={price}/></h3>
        <ProductDescription/>
        <div className="row">
          <div className="col-xs-11 col-xs-offset-1">
            <h2 className="Product__title">
              { name }
            </h2>
            <h3 className="Product__price">
              <Price value={price}/>
            </h3>
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
        <Area
          sku={this.state.selectedSku}
          id="product/shipping-calculator"
        />
        <AddToCartButton
          skuId={defaultSku.id}
          cartValidation={cartValidation}
          className={className}
          id="product-button"
          route="product"
        />
      </div>
    );
  }
}

export default Product;
