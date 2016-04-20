import React from 'react';
import './HeaderMenuToggle.less';
import { stores } from 'sdk';
import hamburgerIcon from 'assets/icons/hamburger_icon.svg';
import hamburgerImg from 'assets/icons/hamburger_icon.png';

const SVGIcon = stores.ComponentStore.getState().getIn(['SVGIcon@pilateslovers.pilateslovers-theme', 'constructor']);

class HeaderMenuToggle extends React.Component {
  render() {
    return (
      <div className="HeaderMenuToggle" onClick={this.props.handleMenuTap}>
        <SVGIcon className="HeaderMenuToggle__svg" svg={hamburgerIcon} fallback={hamburgerImg} width={18} height={18} fill="#153243" />
      </div>
    );
  }
}

export default HeaderMenuToggle;
