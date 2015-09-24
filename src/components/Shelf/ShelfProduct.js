import React from 'react';
import './ShelfProduct.less';
import { Link, History } from 'react-router';
import Img from 'utils/Img';
import Price from 'utils/Price';

class Product extends React.Component {
  static contextTypes = History.contextTypes

  _handleDetails = (ev) => {
    ev.preventDefault();
    this.context.history.pushState(null, `/${this.props.slug}/p`);
  }

  render() {
    let display = this.props.isVisible ? 'block' : 'none';
    let defaultSku = this.props.skus[0];
    let name = this.props.name;
    let imageUrl = defaultSku.images[0].src;
    let price = defaultSku.offers[0].price;

    return (
      <div className="v-shelf__product row" style={{display: display}}>
        <div className="col-xs-12">
          <div className="row">
            <Img className="v-shelf__product-photo col-xs-12" src={imageUrl} width={200} height={235}/>
          </div>
          <div className="row">
            <Link to={`/${this.props.slug}/p`} className="v-shelf__product-title col-xs-12">{name}</Link>
          </div>
          <div className="row">
            <p className="v-shelf__product-price col-xs-12">
              <Price value={price}/>
            </p>
          </div>
          <div className="row">
            <button className="v-shelf__product-btn btn col-xs-12" onTouchTap={this._handleDetails.bind(this)}>
              Ver detalhes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
