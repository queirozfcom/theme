import React from 'react';
import './Product.less';
import Img from 'utils/Img';
import Price from 'utils/Price';
import SkuSelector from './SkuSelector';
import AddToCartButton from 'react-proxy?name=AddToCartButton!components/AddToCartButton/AddToCartButton';
import ProductDescription from  './ProductDescription';

class Product extends React.Component {
  state = {
    selectedVariation: null,
    selectedSku: null,
    validationError: false
  }

  getAllSkus = () => {
    let allSkus = [];
      this.props.skus.forEach(function(sku) {

        if (Array.isArray(allSkus)) {
            allSkus.push(sku);
          } else {
              allSkus[0] = (sku);
            }
      });
      return allSkus;
  }
  //
  // applySkuFilter = (facetLevel, variation) => {
  //
  // }

  // addFacet = () => {
  //
  // }
  //
  // removeFacet = () => {
  //
  // }

  changeVariationState = (activeVar) => {
    if (activeVar === this.state.selectedVariation) {
      this.setState({selectedVariation: null});
      this.setState({validationError: true});
    } else {
      this.setState({selectedVariation: activeVar});
      this.setState({validationError: false});
    }
  }

  changeAvailability = (skus, isActive) => {
    if (skus[0].offers[0].availability > 0) {
      if(isActive)
        return 'v-dream__size-selector--active ';
      return 'v-dream__size-selector';
    }
    return 'v-dream__size-selector--unavailable';
  }


  displayAlert = () => {
    if (this.state.selectedVariation === null) {
      this.setState({validationError: true});
    } else {
      this.setState({validationError: false});
    }
  }


  render() {
    let defaultSku = this.props.skus[0];
    let name = this.props.name;
    let imageUrl = defaultSku.images[0].src;
    let price = defaultSku.offers[0].price;
    // let facets = []; para cada facet deste array, haverá uma chamada da função de applySkuFilter
    let allSkus = this.getAllSkus();



    return (
      <div className="v-product container-fluid">
        <div className="row-fluid">
          <div className="v-product__photo-caroussel">
            <Img className="v-product__photo" src={imageUrl} width={200} height={235}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-11 col-xs-offset-1">
            <h2 className="v-product__title">{name}</h2>
            <h3 className="v-product__price"><Price value={price}/></h3>
          </div>
        </div>
        <SkuSelector skus={this.props.skus} changeVariationState={this.changeVariationState} selectedVariation={this.state.selectedVariation}
                                            changeAvailability={this.changeAvailability} displayAlert={this.displayAlert} validationError={this.state.validationError}/>
        <AddToCartButton skuId={defaultSku.id} displayAlert={this.displayAlert.bind(this)}/>
        <ProductDescription/>
      </div>
    );
  }
}

export default Product;
