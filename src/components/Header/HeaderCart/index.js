import React from 'react';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import cartIcon from 'assets/icons/cart_icon.svg';
import cartImg from 'assets/icons/cart_icon.png';

class HeaderCart extends React.Component {

  render() {

    let cartItens = '3';
    let handleCartTap;

    return (
      <button className="HeaderCart col-xs-2 col-sm-2 col-md-2 col-lg-2 col-sm-push-6 col-md-push-6 col-lg-push-6" onTouchTap={handleCartTap}>
            <SVGIcon className="HeaderCart__svg"
              svg={cartIcon}
              fallback={cartImg}
              width={18}
              height={18}
              cleanupExceptions={['fill', 'width', 'height']}
            />
            <span className="HeaderCart__desktop-itens hidden-xs">{cartItens} Itens</span>
      </button>
    );
  }
}

export default HeaderCart;
