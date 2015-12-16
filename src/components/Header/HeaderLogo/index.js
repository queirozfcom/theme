import React from 'react';
import { Link } from 'react-router';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import storeLogo from 'assets/images/store_logo.svg';
import storeLogoImg from 'assets/images/store_logo.png';

class HeaderLogo extends React.Component {

  render() {

    let logoImage = false;

    let logoImageMarkup = (
      <a href="/">
        <SVGIcon svg={storeLogo} fallback={storeLogoImg} height={45} fill="#153243" />
      </a>
    )

    let logoTextMarkup = (
      <h1 className="HeaderLogo__font">
        <Link to="/">Modally</Link>
      </h1>
    );

    let logoContent = logoImage ? logoImageMarkup : logoTextMarkup;

    return (
      <div className="HeaderLogo col-xs-7 col-sm-9 col-md-9 col-lg-9">
        {logoContent}
      </div>

    );
  }
}

export default HeaderLogo;
