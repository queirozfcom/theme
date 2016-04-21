import React from 'react';
import { stores } from 'sdk';
import cartIcon from 'assets/icons/cart_icon.svg';
import cartImg from 'assets/icons/cart_icon.png';
import './HeaderCart.less';
import './HeaderCartCustom.less';

const SVGIcon = stores.ComponentStore.state.getIn(['SVGIcon@pilateslovers.pilateslovers-theme', 'constructor']);

class HeaderCart extends React.Component {

  render() {
    return (
      <div className="HeaderCart hidden-md hidden-lg">
        <button className="HeaderCart__button clearfix">
          <a href="" className="HeaderCart__content">
            <SVGIcon className="HeaderCart__svg"
              svg={cartIcon}
              fallback={cartImg}
              width={15}
              height={15}
              cleanupExceptions={['fill', 'width', 'height']}
            />
          </a>
        </button>
      </div>
    );
  }
}

export default HeaderCart;
