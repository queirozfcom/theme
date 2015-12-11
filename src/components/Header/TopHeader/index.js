import React from 'react';
import './style.less';
//import SVGIcon from 'utils/SVGIcon';

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
      <div className="TopHeader">
        <div className="container">
          <div className="col-md-2 col-lg-2">
            <button className="TopHeader__button"><a href="">FB</a></button>
            <button className="TopHeader__button"><a href="">IG</a></button>
          </div>
          <div className="TopHeader__contact col-md-10 col-lg-10">
            <div className="TopHeader__login">
              <span><a className="TopHeader__login-link" href={loginURL}>Login</a></span>
            </div>
            <div className="TopHeader__login">
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
