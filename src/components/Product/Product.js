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
    facets: [],
    affix: false
  }

  propTypes: {
    offset: React.PropTypes.number
  }

  static defaultProps = {
    offset: 10
  }

  componentDidMount() {
    window.addEventListener('touchmove', this.handleScroll.bind(this));
    window.addEventListener('wheel', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('touchmove', this.handleScroll.bind(this));
    window.removeEventListener('wheel', this.handleScroll.bind(this));
  }

  handleScroll() {
    let affix = this.state.affix;
    let offset = this.props.offset;
    let elems = [];
    if (document.getElementsByClassName) {
      elems = document.getElementsByClassName('v-editor__app-container');
    } else {
      elems = document.querySelectorAll('.v-editor__app-container');
    }
    let scrollTop = elems.length != 0 ? elems[0].scrollTop : 0;
    if (elems.length === 0) {
      scrollTop = document.body.scrollTop;
    }

    if (!affix && scrollTop >= offset) {
      this.setState({
        affix: true
      });
    }

    if (affix && scrollTop < offset) {
      this.setState({
        affix: false
      });
    }
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

  getImgByVariation = (variationName, variationValue) => {
    let img;
    this.props.skus.forEach(function(sku) {
      sku.properties.forEach(function(property) {
        if (property.facet.name === variationName) {
          if (property.facet.values[0] === variationValue) {
            img = sku.images[0].src;
          }
        }
      })
    })
    return img;
  }

  addFacet = (variationName, variationValue, displayType) => {
    let selectedImg;
    if (displayType === 'image') {
      selectedImg = this.getImgByVariation(variationName, variationValue);
    } else {
      selectedImg = null;
    }
    if (this.state.facets.length > 0) {
      this.removeFacet(variationName);
    }
    this.state.facets.push({name: variationName, value: variationValue});
    this.getAvailability(variationValue) > 0 ?
      this.setState({
        facets: this.state.facets,
        selectedImg: selectedImg,
        selectedSku: this.filterSkus(this.props.skus)
      }) :
      this.setState({ facets: this.state.facets, selectedImg: selectedImg
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

  getAvailability = (value, valueName) => {
    let availability = 0;
    let skus = this.props.skus;
    if (this.state.facets.length >= 1 && this.state.facets[0].name != valueName) {
      skus = this.filterSkus(skus);
    }
    skus.forEach(function(sku) {
      sku.properties.forEach((property)=> {
        if (property.facet.values[0] === value && availability === 0) {
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
    let cartValidation = this.state.facets.length === skuVariations.length && this.state.selectedSku.length === 1 ? true : false;

    let classes = this.state.affix ? 'v-add-to-cart-button--fixed btn btn-block col-xs-8' : 'v-add-to-cart-button btn btn-block';
    var {className, offset, ...props} = this.props;

    if (this.state.facets.length !== 0) {
      skus = this.filterSkus(skus);
    }

    if (this.state.selectedSku.length === 1) {
      defaultSku = this.state.selectedSku[0];
    }

    return (
      <div className="v-product container-fluid">
        <div className="row-fluid">
          <div className="v-product__photo-caroussel">
            <Img className="v-product__photo" src={imageUrl} width={200} height={235}  selectedImg={this.state.selectedImg}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-11 col-xs-offset-1">
            <h2 className="v-product__title">{name}</h2>
            <h3 className="v-product__price"><Price value={price}/></h3>
          </div>
        </div>
        <SkuSelector skus={skus} facets={this.state.facets} removeFacet={this.removeFacet.bind(this)} addFacet={this.addFacet.bind(this)}
                     getAvailability={this.getAvailability.bind(this)} skuVariations={skuVariations} getImg={this.getImgByVariation}
                     changeAvailability={this.changeAvailability}/>
        { this.state.affix ?
          <div>
            <AddToCartButton skuId={defaultSku.id} classes = {classes} id="product-button" route="product"/>
            <h3 className="v-product__price--fixed col-xs-4"><Price value={price}/></h3>
          </div>
          : <AddToCartButton skuId={defaultSku.id} cartValidation={cartValidation} classes = {classes} id="product-button" route="product"/>
        }
        <ProductDescription/>
      </div>
    );
  }
}

export default Product;
