import { dispatcher, connectToStores } from 'sdk';
import React from 'react';
import Product from './Product';
import style from 'styles/components/shelf/Shelf.less'; // eslint-disable-line
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
    quantity: 2,
    collectionId: 1,
    ShopStore: dispatcher.stores.ShopStore.getState()
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    quantity: React.PropTypes.oneOf([2, 3, 4, 5, 6]).isRequired,
    collectionId: React.PropTypes.number.isRequired,
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
    let search = {
      id: this.props.id,
      accountName: this.props.ShopStore.get('accountName'),
      query: this.props.collectionId,
      pageSize: this.props.quantity
    };

    dispatcher.actions.SearchActions.requestSearch(search);
  }

  render() {
    const editMode = this.props.EditorStore.get('isActive');
    const EditComponent = this.props.ComponentStore.getIn(['ShelfEditMode', 'constructor']);
    if (editMode && EditComponent) {
      return <EditComponent {...this.props}/>;
    }

    let products;
    // If there is results for the query at the SearchStore
    if (this.props.SearchStore.getIn([this.props.id, 'results'])) {
      // Get the results
      let productsIds = this.props.SearchStore.getIn([this.props.id, 'results']);
      // Get the products in ProductStore
      products = dispatcher.stores.ProductStore.getProducts(productsIds);
    }

    const quantity = this.props.quantity;
    const canMoveLeft = (this.state.currentProductVisible - 1 >= 0);
    const canMoveRight = (this.state.currentProductVisible + 1 <= quantity);

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
                    key={(product.slug)}/>
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
