import React from 'react';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import facebookIcon from 'assets/icons/facebook_icon.svg';
import facebookImg from 'assets/icons/facebook_icon.png';
import instagramIcon from 'assets/icons/instagram_icon.svg';
import instagramImg from 'assets/icons/instagram_icon.png';


class TopHeader extends React.Component {

  render() {

    let phoneNumber;
    phoneNumber = '(21) 3593-4758';

    let phoneNumberURL;
    phoneNumberURL = 'tel:' + phoneNumber;

    let loginURL;
    loginURL = '#';

    let accountURL;
    accountURL = '#';

    return (
      <div className="TopHeader clearfix">
      <div className="TopHeader__wrap">
        <div className="col-md-2 col-lg-2 col-sm-2 hidden-xs">
          <button className="TopHeader__button">
            <a href="">
              <SVGIcon className="TopHeader__icon" svg={facebookIcon} fallback={facebookImg} height={15} fill="#2D4966" />
            </a>
          </button>
          <button className="TopHeader__button">
            <a href="">
              <SVGIcon className="TopHeader__icon" svg={instagramIcon} fallback={instagramImg} height={15} fill="#2D4966" />
            </a>
          </button>
        </div>
        <div className="TopHeader__contact col-md-10 col-lg-10 col-xs-12 col-sm-10">
          <div className="TopHeader__login pull-right">
            <span><a className="TopHeader__login-link" href={loginURL}>Login</a></span>
          </div>
          <div className="TopHeader__login pull-right">
            <span><a className="TopHeader__login-link" href={accountURL}>Minha Conta</a></span>
          </div>
          <div className="TopHeader__phone-cta">
            <span className="TopHeader__phone-number">
              <a href={phoneNumberURL} className="TopHeader__phone-url">
                {phoneNumber}
              </a>
            </span>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default TopHeader;
