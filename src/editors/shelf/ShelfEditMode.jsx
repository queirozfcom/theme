import React from 'react';
import { dispatcher } from 'sdk';
import style from 'styles/components/shelf/ShelfEditMode.less'; // eslint-disable-line
import SVGIcon from 'components/utils/SVGIcon';
import arrowLeftIcon from 'assets/icons/arrow-left.svg';
import arrowRightIcon from 'assets/icons/arrow-right.svg';

class ShelfEditMode extends React.Component {
  handleOpenEditor = () => {
    dispatcher.actions.EditorActions.openEditor({
      component: 'ShelfEditor',
      route: this.props.route,
      id: this.props.id
    });
  }

  render() {
    return (

      <div className="v-shelf-ed__placeholder row-fluid" onTouchTap={this.handleOpenEditor}>
        <h2 className="v-shelf__title">Prateleira</h2>

        <div className="row-fluid clearfix">

          <button className="v-arrow col-xs-2 v-clean-btn">
            <SVGIcon className="v-arrow-icon--edit" svg={arrowLeftIcon} width={26} height={88} />
          </button>

          <div className="v-shelf__products col-xs-8">
            <div className="v-shelf__product col-xs-12">
              <img className="v-shelf__product-photo" src="assets/@vtex.storefront-theme/images/shelf-placeholder.png"/>
              <p className="v-shelf-ed__product-title">Produto</p>
              <p className="v-shelf-ed__product-price">R$ 10.00</p>
              <div className="v-btn--placeholder btn btn-block">
                <p>Adicionar ao carrinho</p>
              </div>
            </div>
          </div>

          <button className="v-arrow col-xs-2 v-clean-btn">
            <SVGIcon className="v-arrow-icon--edit" svg={arrowRightIcon} width={26} height={88} />
          </button>
        </div>
      </div>

    );
  }
}

export default ShelfEditMode;
