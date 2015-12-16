import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Area } from 'sdk';
import HeaderTop from './HeaderTop';
import HeaderLogo from './HeaderLogo';
import HeaderCart from './HeaderCart';
import HeaderSearch from './HeaderSearch';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import hamburgerIcon from 'assets/icons/hamburger.svg';

class Header extends React.Component {
  state = {
    isMenuOpen: false,
    isSearchOpen: false
  }

  handleMenuTap = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  handleSearchTap = () => {
    this.setState({ isSearchOpen: !this.state.isSearchOpen });
  }

  render() {
    let menu = this.state.isMenuOpen ?
      (
        <Area
          id={`${this.props.areaPath}/navigation-menu`}
          key="NavigationMenu"
          toggleMenu={this.handleMenuTap}
        />
      ) : null;

    return (
      <div className="Header">
      <HeaderTop />
        <div className="Header__inner clearfix">

          <div className="col-xs-1 visible-xs">
            <SVGIcon className="Header__menu-icon" onTouchTap={this.handleMenuTap} svg={hamburgerIcon} width={18} height={18} fill="#153243" />
          </div>

          <HeaderLogo />
          <HeaderSearch />
          <HeaderCart />

          <Area id={`${this.props.areaPath}/search-bar`} visible={this.state.isSearchOpen} handleSearchTap={this.handleSearchTap}/>

          <ReactCSSTransitionGroup
            transitionName="NavigationMenu"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={250}
          >
            { menu }
          </ReactCSSTransitionGroup>
        </div>
      </div>

    );
  }
}

export default Header;
