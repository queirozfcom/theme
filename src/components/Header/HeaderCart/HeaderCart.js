import React from 'react';
import SVGIcon from 'utils/SVGIcon';
import cartIcon from 'assets/icons/cart_icon.svg';
import cartImg from 'assets/icons/cart_icon.png';
import './HeaderCart.less';
import './HeaderCartCustom.less';

class HeaderCart extends React.Component {

  render() {

    let cartItens = '3';

    return (
      <div className="HeaderCart">
        <button className="HeaderCart__button clearfix">
          <a href="" className="HeaderCart__content">
            <span className="HeaderCart__desktop-itens hidden-xs">{cartItens} Itens</span>
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
