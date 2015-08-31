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

  changeVariationState = (activeVar) => {
    if (activeVar === this.state.selectedVariation) {
      this.setState({selectedVariation: null});
      this.setState({validationError: true});
    } else {
      this.setState({selectedVariation: activeVar});
      this.setState({validationError: false});
    }
  }

  displayAlert = () => {
    console.log('display alert');
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
                                            displayAlert={this.displayAlert} validationError={this.state.validationError}/>
        <AddToCartButton skuId={defaultSku.id} displayAlert={this.displayAlert.bind(this)}/>
        <ProductDescription/>
      </div>
    );
  }
}

export default Product;
