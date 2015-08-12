import React from 'react';
import Product from './Product';
import style from 'styles/components/shelf/Shelf.less'; // eslint-disable-line
import SVGIcon from 'components/utils/SVGIcon';
import arrowLeftIcon from 'assets/icons/arrow-left.svg';
import arrowRightIcon from 'assets/icons/arrow-right.svg';

class Shelf extends React.Component {
  state = {
    currentProductVisible: 0
  }

  moveLeft() {
    let newCurrentProductVisible = this.state.currentProductVisible - 1;

    if (newCurrentProductVisible >= 0) {
      this.setState({currentProductVisible: newCurrentProductVisible});
    }
  }

  moveRight() {
    let productsQty = this.props.products.length - 1;
    let newCurrentProductVisible = this.state.currentProductVisible + 1;

    if (newCurrentProductVisible <= productsQty) {
      this.setState({currentProductVisible: newCurrentProductVisible});
    }
  }

  render() {
    return (
      <div className="v-shelf row-fluid">
        <h2 className="v-shelf__title">{this.props.title}</h2>

        <div className="row-fluid clearfix">

          <div className="v-arrow col-xs-2">
            <SVGIcon className="v-arrow-icon" svg={arrowLeftIcon} width={26} height={88} onTouchTap={this.moveLeft.bind(this)}/>
          </div>

          <div className="v-shelf__products col-xs-8">
          {this.props.products.map((product, index) =>
            <Product product={product}
                    isVisible={(index === this.state.currentProductVisible)}
                    key={(product.name + product.image)}/>
          )}
          </div>

          <div className="v-arrow col-xs-2">
            <SVGIcon className="v-arrow-icon" svg={arrowRightIcon} width={26} height={88} onTouchTap={this.moveRight.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
