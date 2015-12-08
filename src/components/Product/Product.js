import React from 'react';
import Immutable from 'immutable';
import './Product.less';
import { stores } from 'sdk';
import AddToCartButton from 'react-proxy?name=AddToCartButton!components/AddToCartButton/AddToCartButton';
import ProductDescription from  './ProductDescription';

const Area = stores.ComponentStore.state.getIn(['Area@vtex.storefront-sdk', 'constructor']);
const Price = stores.ComponentStore.state.getIn(['Price@vtex.storefront-sdk', 'constructor']);

class Product extends React.Component {
  state = {
    selectedSku: [],
    selectedImg: null,
    facets: []
  }

  getSkuVariations = () => {
    let skuVariations = [];
    let variationNumber = this.props.skus[0].properties.length;
    for (let i=0; i<variationNumber; i++) {
      let eachVariation = {name: '', label: '', values: [], orderedValues: [], type: 'PICKER' };
      eachVariation.name = this.props.skus[0].properties[i].facet.name;
      eachVariation.label = this.props.skus[0].properties[i].facet.name;
      this.props.skus.forEach(function(sku) {
        if (eachVariation.values.indexOf(sku.properties[i].facet.values[0]) === -1) {
          eachVariation.values.push(sku.properties[i].facet.values[0]);
          eachVariation.orderedValues.push(sku.properties[i].facet.values[0]);
        }
      });
      eachVariation.type = eachVariation.name === 'Cor' ? 'IMG' : 'PICKER';
      skuVariations.push(eachVariation);
    }
    return Immutable.fromJS(skuVariations);
  }

  addFacet = (variationName, variationValue, imgUrl) => {
    let selectedImg;
    if (imgUrl != null) {
      selectedImg = imgUrl;
    } else {
      selectedImg = null;
    }
    if (this.state.facets.length > 0) {
      this.removeFacet(variationName);
    }
    this.state.facets.push({name: variationName, value: variationValue});
    this.setState({
      facets: this.state.facets,
      selectedImg: selectedImg,
      selectedSku: this.filterSkus(this.props.skus)
    });
  }

  removeFacet = (variationName) => {
    this.state.facets.forEach((facet) => {
      if (facet.name === variationName) {
        let index = this.state.facets.indexOf(facet);
        this.state.facets.splice(index,1);
      }
    });
    this.setState({
      facets: this.state.facets,
      selectedImg: null
    });
  }

  filterSkus = (skus) => {
    let result = [];
    this.state.facets.forEach((facet) => {
      result = [];
      skus.forEach((sku) => {
        sku.properties.forEach((property) => {
          if (property.facet.name === facet.name) {
            if (property.facet.values[0] === facet.value) {
              if (result.indexOf(sku) === -1) {
                result.push(sku);
              }
            }
          }
        });
      });
      skus = result;
    });
    return result;
  }

  render() {
    let defaultSku = this.props.skus[0];
    let name = this.props.name;
    let price = defaultSku.offers[0].price;
    let skus = this.props.skus;
    let filteredSkus;
    let skuVariations = this.getSkuVariations();
    let cartValidation = this.state.facets.length === skuVariations.count() && this.state.selectedSku.length === 1 ? true : false;

    let className = 'AddToCartButton--fixed';

    if (this.state.facets.length !== 0) {
      filteredSkus = this.filterSkus(skus);
    }

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
          skuVariations.count() > 0 ?
            <Area
              skus={skus}
              filteredSkus={filteredSkus}
              removeFacet={this.removeFacet.bind(this)}
              addFacet={this.addFacet.bind(this)}
              skuVariations={skuVariations}
              facets={this.state.facets}
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
