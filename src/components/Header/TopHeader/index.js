import React from 'react';
import './style.less';
//import SVGIcon from 'utils/SVGIcon';

class TopHeader extends React.Component {

  render() {

    let phoneNumber;
    phoneNumber = '(21) 3593-4758';

    let phoneNumberURL;
    phoneNumberURL = 'tel:' + phoneNumber;

    let contactURL;
    contactURL = '#';

    return (
      <div className="TopHeader">
        <div className="TopHeader__wrap container">
          <div className="col-md-2 col-lg-2">
            <button className="TopHeader__social"><a href="">FB</a></button>
            <button className="TopHeader__social"><a href="">IG</a></button>
          </div>
          <div className="TopHeader__contact col-md-10 col-lg-10">
            <div className="TopHeader__login">
              <span><a className="TopHeader__login-link" href={contactURL}>Fale Conosco</a></span>
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
