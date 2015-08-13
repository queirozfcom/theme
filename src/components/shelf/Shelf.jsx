import { dispatcher, connectToStores } from 'sdk';
import React from 'react';
import Product from './Product';
import style from 'styles/components/shelf/Shelf.less'; // eslint-disable-line
import SVGIcon from 'components/utils/SVGIcon';
import arrowLeftIcon from 'assets/icons/arrow-left.svg';
import arrowRightIcon from 'assets/icons/arrow-right.svg';

@connectToStores([
  dispatcher.stores.SettingsStore,
  dispatcher.stores.ComponentStore,
  dispatcher.stores.EditorStore
])
class Shelf extends React.Component {
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

  render() {
    const editMode = this.props.EditorStore.get('isActive');
    const EditComponent = this.props.ComponentStore.getIn(['ShelfEditMode', 'constructor']);
    if (editMode && EditComponent) {
      return <EditComponent {...this.props}/>;
    }

    const productsQty = this.props.products.length - 1;
    const canMoveLeft = (this.state.currentProductVisible - 1 >= 0);
    const canMoveRight = (this.state.currentProductVisible + 1 <= productsQty);

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
          {this.props.products.map((product, index) =>
            <Product product={product}
                    isVisible={(index === this.state.currentProductVisible)}
                    key={(product.name + product.image)}/>
          )}
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
