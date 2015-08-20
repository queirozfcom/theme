import React from 'react';
import { dispatcher } from 'sdk';
import 'styles/components/shelf/ShelfEditMode.less';
import SVGIcon from 'components/utils/SVGIcon';
import arrowLeftIcon from 'assets/icons/arrow-left.svg';
import arrowRightIcon from 'assets/icons/arrow-right.svg';
import imagePlaceholder from 'assets/images/shelf-placeholder.png';

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
            <div className="v-shelf__product">
              <img className="v-shelf__product-photo" src={imagePlaceholder}/>
              <p className="v-shelf-ed__product-title">Produto</p>
              <p className="v-shelf-ed__product-price">R$ 10.00</p>
              <button className="v-shelf__product-btn__placeholder btn">
                Adicionar ao carrinho
              </button>
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
