import React from 'react';
import { Link } from 'react-router';
import './Product.less';
import { stores } from 'sdk';
import AddToCartButton from 'react-proxy?name=AddToCartButton!components/AddToCartButton/AddToCartButton';
import ProductDescription from  './ProductDescription';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);
const Price = stores.ComponentStore.state.getIn(['Price@vtex.storefront-sdk', 'constructor']);

class Product extends React.Component {
  componentWillMount() {
    if (this.props.skus.length === 1) {
      let selectedSku = this.props.skus[0];

      this.setState({ selectedSku });
    } else {
      this.setState({ selectedSku: undefined });
    }
  }

  changeSelectedSku = (selectedSku) => {
    this.setState({ selectedSku });
  };

  render() {
    let defaultSku = this.state.selectedSku || this.props.skus[0];
    console.log(defaultSku);
    let name = this.props.name;
    let brand = this.props.brand;
    let listPrice = defaultSku.offers[0].listPrice;
    let price = defaultSku.offers[0].price;
    let percentualDiscount = Math.floor((1 - (price/listPrice)) * 100);
    let availability = defaultSku.offers[0].availability;
    let availabilityBanner = '';

    if (availability < 3){
      availabilityBanner = <div className="row">
        <div className="col-xs-12 well well-sm banner-availability">
          <div className="text-center">Últimas unidades em estoque</div>
        </div>
      </div>;
    }

    let skus = this.props.skus;
    let cartValidation = this.state.selectedSku ? true : false;
    let className = 'AddToCartButton--fixed';

    return (
      <div className="Product">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="hidden-sm hidden-md hidden-lg">
              <h2 className="Product__title pl-title-m">{name}</h2>
            </div>
            <Placeholder id="product-image" images={defaultSku.images} />
          </div>
          <div className="Product__infos col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="visible-sm visible-md visible-lg">
              <h2 className="Product__title">{name}</h2>
              <h3 className="Product__price list-price">De <Price value={listPrice}/></h3>
              <h3 className="Product__price">Por <Price value={price}/></h3>
              <h3 className="Product__price percentual-discount">Desconto de { percentualDiscount }%</h3>
            </div>
            <div className="visible-xs">
              <div className="row">
                <div className="col-xs-6">
                  {
                    skus.length > 1 ?
                      <Area
                        skus={skus}
                        changeSelectedSku={this.changeSelectedSku}
                        id="product/sku-selector"
                      /> :
                      <div>
                        <h3 className="Product__price list-price pull-left">De <Price value={listPrice}/></h3>
                        <h3 className="Product__price pull-left">Por <Price value={price}/></h3>
                        <h3 className="Product__price percentual-discount pull-left">Desconto de { percentualDiscount }%</h3>
                      </div>
                  }
                </div>
                <div className="col-xs-6">
                  {
                    skus.length > 1 ?
                      <div>
                        <h3 className="Product__price list-price pull-right">De <Price value={listPrice}/></h3>
                        <h3 className="Product__price pull-right">Por <Price value={price}/></h3>
                        <h3 className="Product__price percentual-discount pull-right">Desconto de { percentualDiscount }%</h3>
                      </div> : null
                  }
                </div>
              </div>

            </div>
            {availabilityBanner}
            <AddToCartButton
              skuId={defaultSku.id}
              cartValidation={cartValidation}
              className={className}
              id="product-button"
              route="product"
            />
            <Placeholder
              sku={this.state.selectedSku}
              id="shipping-calculator"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 Product__shipping-wrapper">
            <ProductDescription description={ this.props.description } />
            <div className="brand">
              Marca: <Link to={`/${brand.name}/s`}>
                <span className="brand-link">{ brand.name }</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
