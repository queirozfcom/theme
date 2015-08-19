import { dispatcher, connectToStores, editable } from 'sdk';
import React from 'react';
import Product from './Product';
import 'styles/components/shelf/Shelf.less';
import SVGIcon from 'components/utils/SVGIcon';
import arrowLeftIcon from 'assets/icons/arrow-left.svg';
import arrowRightIcon from 'assets/icons/arrow-right.svg';

@connectToStores([
  dispatcher.stores.SearchStore,
  dispatcher.stores.ComponentStore,
  dispatcher.stores.EditorStore
])
class Shelf extends React.Component {
  static defaultProps = {
    title: 'Titulo',
    quantity: '2',
    search: '1',
    ShopStore: dispatcher.stores.ShopStore.getState()
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    quantity: React.PropTypes.oneOf(['2', '3', '4', '5', '6', 2, 3, 4, 5, 6]).isRequired,
    search: React.PropTypes.string.isRequired,
    ShopStore: React.PropTypes.object.isRequired
  }

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

  componentWillMount() {
    if (!this.props.SearchStore.get(this.props.id)) {
      let search = {
        id: this.props.id,
        category: this.props.category,
        pageSize: this.props.quantity
      };

      dispatcher.actions.SearchActions.requestSearch(search);
    }
  }

  @editable
  render() {
    let products;
    // If there is results for the query at the SearchStore
    if (this.props.SearchStore.getIn([this.props.id, 'results'])) {
      // Get the results
      let productsIds = this.props.SearchStore.getIn([this.props.id, 'results']);
      // Get the products in ProductStore
      products = dispatcher.stores.ProductStore.getProducts(productsIds);
    }

    const maxQuantity = Math.min((products ? (products.length - 1) : 0), this.props.quantity);
    const canMoveLeft = (this.state.currentProductVisible !== 0);
    const canMoveRight = (this.state.currentProductVisible !== maxQuantity);

    return (
      <div className="v-shelf row-fluid">
        <h2 className="v-shelf__title">{this.props.title}</h2>

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

export default Shelf;
