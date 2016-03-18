import React from 'react';
import './style.less';
import { stores } from 'sdk';
import SVGIcon from 'utils/SVGIcon';
import storeLogo from 'assets/images/store_logo.svg';
import storeLogoImg from 'assets/images/store_logo.png';

const Link = stores.ComponentStore.getState().getIn(['Link@vtex.storefront-sdk', 'constructor']);

class HeaderLogo extends React.Component {
  render() {
    let logoImage = true;
    let logoAlt = 'Modally';
    let logoImageMarkup = (
      <Link to="/" className="HeaderLogo__image">
        <SVGIcon
          className="HeaderLogo__svg"
          svg={storeLogo}
          fallback={storeLogoImg}
          height={40}
          width={100}
          alt-text={logoAlt}
          cleanupExceptions={['fill', 'width', 'height']}
        />
      </Link>
    );

    let logoTextMarkup = (
      <h1 className="HeaderLogo__font">
        <Link to="/">Modally</Link>
      </h1>
    );

    let logoContent = logoImage ? logoImageMarkup : logoTextMarkup;

    return (
      <div className="HeaderLogo col-xs-6 col-sm-3 col-md-3 col-lg-3">
        { logoContent }
      </div>

    );
  }
}

export default HeaderLogo;
