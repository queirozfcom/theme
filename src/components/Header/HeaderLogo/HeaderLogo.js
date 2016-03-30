import React from 'react';
import logoImage from 'assets/images/logo.jpg'
import './HeaderLogo.less';

class HeaderLogo extends React.Component {

  render() {
    return (
      <div className="HeaderLogo" data-is-mobile={this.props.isMobile}>
        <a href="/">
          <img src={ logoImage } alt="Pilates Lovers"/>
        </a>
      </div>
    );
  }
}

export default HeaderLogo;
