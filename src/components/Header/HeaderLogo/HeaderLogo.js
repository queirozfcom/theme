import React from 'react';
//import logoImage from 'assets/images/logo.jpg'
import './HeaderLogo.less';
import './HeaderLogoCustom.less';
import { stores } from 'sdk';

const Link = stores.ComponentStore.getState().getIn(['Link@vtex.storefront-sdk', 'constructor']);

class HeaderLogo extends React.Component {

  render() {
    return (
      <div className="HeaderLogo" data-is-mobile={this.props.isMobile}>
        <Link to="/">
          <img src="https://cdn.awsli.com.br/400x300/67/67849/logo/bb5a63a858.jpg" alt="Pilates Lovers"/>
        </Link>
      </div>
    );
  }
}

export default HeaderLogo;
