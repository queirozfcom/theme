import React from 'react';
import './Product.less';
import Img from 'utils/Img';
import Price from 'utils/Price';
import SkuSelector from 'react-proxy?name=SkuSelector!./SkuSelector';
import AddToCartButton from 'react-proxy?name=AddToCartButton!components/AddToCartButton/AddToCartButton';
import ProductDescription from  './ProductDescription';

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
      let eachVariation = {name: '', values: [] };
      eachVariation.name = this.props.skus[0].properties[i].facet.name;
      this.props.skus.forEach(function(sku) {
        if (eachVariation.values.indexOf(sku.properties[i].facet.values[0]) === -1) {
          eachVariation.values.push(sku.properties[i].facet.values[0]);
        }
      });
      skuVariations.push(eachVariation);
    }
    return skuVariations;
  }

  addFacet = (variationName, variationValue, displayType) => {
    let selectedImg;
    if (displayType != null) {
      selectedImg = displayType;
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
    })
  }

  removeFacet = (variationName) => {
    this.state.facets.forEach((facet) => {
      if (facet.name === variationName) {
        let index = this.state.facets.indexOf(facet);
        this.state.facets.splice(index,1);
      }
    })
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
        })
      })
      skus = result;
    });
    return result;
  }

  render() {
    let defaultSku = this.props.skus[0];
    let name = this.props.name;
    let imageUrl = defaultSku.images[0].src;
    let price = defaultSku.offers[0].price;
    let skus = this.props.skus;
    let filteredSkus;
    let skuVariations = this.getSkuVariations();
    let cartValidation = this.state.facets.length === skuVariations.length && this.state.selectedSku.length === 1 ? true : false;

    let className = 'v-add-to-cart-button--fixed btn btn-block';
    let selectedImg = this.state.selectedImg;
    let skuIsAvailable = true;

    if (this.state.facets.length !== 0) {
      filteredSkus = this.filterSkus(skus);
    }

    if (this.state.selectedSku.length === 1) {
      defaultSku = this.state.selectedSku[0];
      if (this.state.selectedSku.offers[0].availability === 0) {
        skuIsAvailable = false;
      }
    }

    return (
      <div className="container-fluid">
        <div className="row-fluid">
          <div className="v-product__photo-caroussel">
            <Img className="v-product__photo" src={selectedImg ? selectedImg : imageUrl} width={200} height={235}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-11 col-xs-offset-1">
            <h2 className="v-product__title">{name}</h2>
            <h3 className="v-product__price"><Price value={price}/></h3>
          </div>
        </div>
        <SkuSelector skus={skus} filteredSkus={filteredSkus}
                     removeFacet={this.removeFacet.bind(this)} addFacet={this.addFacet.bind(this)}
                     skuVariations={skuVariations} facets={this.state.facets}/>
        {
          skuIsAvailable ?
            <AddToCartButton skuId={defaultSku.id} cartValidation={cartValidation} className={className}
                         id="product-button" route="product"/> :
            <LetMeKnowButton sku={this.state.selectedSku}/>
        }
        <ProductDescription/>
      </div>
    );
  }
}

export default Product;
