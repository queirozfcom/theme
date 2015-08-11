import React from 'react';
import style from 'styles/components/shelf/Shelf.less'; // eslint-disable-line

class Shelf extends React.Component {
  render() {
    return (
      <div className="v-shelf row-fluid">
        <h2 className="v-shelf__title">{this.props.title}</h2>

        <div className="row-fluid clearfix">

          <div className="v-arrow col-xs-2">
            <div className="v-icon v-icon__arrow-left"></div>
          </div>

          {this.props.products.map((product) =>
            <div className="v-shelf__product col-xs-8" key={(product.name + product.image)}>
              <img className="v-shelf__product-photo" src={product.image}/>
              <p className="v-shelf__product-title">{product.name}</p>
              <p className="v-shelf__product-price">{product.price}</p>
              <div className="v-btn btn btn-block">
                <p>Adicionar ao carrinho</p>
              </div>
            </div>
          )}

          <div className="v-arrow col-xs-2">
            <div className="v-icon v-icon__arrow-right"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
