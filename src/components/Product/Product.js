import React from 'react';
import './Product.less';
import Img from 'utils/Img';
import Price from 'utils/Price';
import SkuSelector from './SkuSelector';
import AddToCartButton from './AddToCartButton';
import ProductDescription from  './ProductDescription';

class Product extends React.Component {
  state = {
    selectedSku: [],
    validationError: false,
    facets: []
  }

  getSkuVariations = () => {
    let skuVariations = [];
    let variationNumber = this.props.skus[0].properties.length;
    for(let i=0; i<variationNumber; i++) {
      let eachVariation = {name: '', values: [] };
      eachVariation.name = this.props.skus[0].properties[i].facet.name;
      this.props.skus.forEach(function(sku) {
            if(eachVariation.values.indexOf(sku.properties[i].facet.values[0]) === -1) {
              eachVariation.values.push(sku.properties[i].facet.values[0]);
          }
        });
        skuVariations.push(eachVariation);
    }
    return skuVariations;
  }

  addFacet = (variationName, variationValue, skus) => {
    this.state.facets.push({name: variationName, value: variationValue});
    this.getAvailability(variationValue) > 0 ?
      this.setState({
        facets: this.state.facets,
        validationError: false,
        selectedSku: skus
      }) :
      this.setState({ facets: this.state.facets
      })
    }
  

  removeFacet = (variationName) => {
    this.state.facets.forEach((facet) => {
      if(facet.name === variationName) {
          let index = this.state.facets.indexOf(facet);
          this.state.facets.splice(index,1);
      }
    })
    this.setState({
      facets: this.state.facets,
      validationError: true
    });
  }

  filterSkus = (skus, facets) => {
    let result = [];
    facets.forEach((facet) => {
      result = [];
      skus.forEach((sku) => {
        sku.properties.forEach((property) => {
          if(property.facet.name === facet.name) {
            if(property.facet.values[0] === facet.value) {
              if(result.indexOf(sku) === -1) {
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

  displayAlert = () => {
    if(this.state.facets.length === 0) {
          this.setState({validationError: true});
      } else {
        this.setState({validationError: false});
      }
  }

  getAvailability = (value) => {
    let availability = 0;
    this.props.skus.forEach(function(sku) {
      sku.properties.forEach((property)=> {
            if(property.facet.values[0] === value && availability === 0) {
              return availability = sku.offers[0].availability;
            }
      })
    });
    return availability;
  }

  render() {
    let defaultSku = this.props.skus[0];
    let name = this.props.name;
    let imageUrl = defaultSku.images[0].src;
    let price = defaultSku.offers[0].price;
    let skus = this.props.skus;
    let skuVariations = this.getSkuVariations();

    if (this.state.facets.length !== 0) {
      skus = this.filterSkus(skus, this.state.facets);
    }

    if(this.state.selectedSku.length === 1) {
      defaultSku = this.state.selectedSku[0];
    }

    console.log('facets:');
    console.log(this.state.facets);
    console.log('selectedSku ' + this.state.selectedSku);
    console.log('skus ')
    console.log(skus);


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
        <SkuSelector skus={skus} facets={this.state.facets} removeFacet={this.removeFacet.bind(this)} addFacet={this.addFacet.bind(this)}
                     getAvailability={this.getAvailability.bind(this)} skuVariations={skuVariations}
                     changeAvailability={this.changeAvailability} validationError={this.state.validationError}/>
        <AddToCartButton skuId={defaultSku.id} displayAlert={this.displayAlert.bind(this)}/>
        <ProductDescription/>
      </div>
    );
  }
}

export default Product;
