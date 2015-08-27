import { dispatcher } from 'sdk';
import React from 'react';
import Product from './Product';
import 'styles/components/shelf/Shelf.less';
import SVGIcon from 'components/utils/SVGIcon';
import arrowLeftIcon from 'assets/icons/arrow-left.svg';
import arrowRightIcon from 'assets/icons/arrow-right.svg';

class ShelfSlider extends React.Component {
  state = {
    currentProductVisible: 0
  }

  moveLeft() {
    this.setState({
      currentProductVisible: this.state.currentProductVisible - 1
    });
  }

  moveRight() {
    this.setState({
      currentProductVisible: this.state.currentProductVisible + 1
    });
  }

  _getSearch(props) {
    return {
      category: props.settings.get('category'),
      pageSize: props.settings.get('quantity')
    };
  }

  componentWillMount() {
    if (!this.props.settings) {
      return;
    }

    if (!this.props.SearchStore.get(this.props.id)) {
      let search = this._getSearch(this.props);
      search.$id = this.props.id;
      dispatcher.actions.SearchActions.requestSearch(search);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.settings) {
      return;
    }

    if (!this.props.SearchStore.get(this.props.id)) {
      let search = this._getSearch(this.props);
      search.$id = this.props.id;
      dispatcher.actions.SearchActions.requestSearch(search);
    }
  }

  render() {
    let products;
    let title = this.props.settings.get('title');

    // If there is results for the query at the SearchStore
    if (this.props.SearchStore.getIn([this.props.id, 'results'])) {
      // Get the results
      let productsIds = this.props.SearchStore.getIn([this.props.id, 'results']);
      // Get the products in ProductStore
      products = dispatcher.stores.ProductStore.getProducts(productsIds);
    }

    let maxQuantity = Math.min((products ? (products.length - 1) : 0), this.props.settings.get('quantity'));
    const canMoveLeft = (this.state.currentProductVisible !== 0);
    const canMoveRight = (this.state.currentProductVisible !== maxQuantity);

    return (
      <div className="v-shelf row-fluid">
        <h2 className="v-shelf__title">{title}</h2>

        <div className="row-fluid clearfix">
          <button className="v-arrow col-xs-2 v-clean-btn v-no-outlines">
            <SVGIcon className="v-arrow-icon" svg={arrowLeftIcon} width={26} height={88}
                     data-is-disabled={!canMoveLeft}
                     onTouchTap={canMoveLeft ? this.moveLeft.bind(this) : null}/>
          </button>

          <div className="v-shelf__products col-xs-8">
          {products ? products.map((product, index) =>
            <Product {...product}
                    isVisible={(index === this.state.currentProductVisible)}
                    key={product.slug}/>
          ) : <div>Carregando</div>}
          </div>

          <button className="v-arrow col-xs-2 v-clean-btn v-no-outlines">
            <SVGIcon className="v-arrow-icon" svg={arrowRightIcon} width={26} height={88}
                     data-is-disabled={!canMoveRight}
                     onTouchTap={canMoveRight ? this.moveRight.bind(this) : null}/>
          </button>
        </div>
      </div>
    );
  }
}

export default ShelfSlider;
