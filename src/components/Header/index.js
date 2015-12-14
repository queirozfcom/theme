import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Area } from 'sdk';
import TopHeader from './TopHeader';
import HeaderLogo from './HeaderLogo';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import hamburgerIcon from 'assets/icons/hamburger.svg';
import searchIcon from 'assets/icons/search.svg';
import cartIcon from 'assets/icons/cart.svg';

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
      <TopHeader />
        <div className="Header__inner clearfix">

          <div className="col-xs-1 visible-xs">
            <SVGIcon className="Header__menu-icon" onTouchTap={this.handleMenuTap} svg={hamburgerIcon} width={18} height={18} fill="#153243" />
          </div>

          <HeaderLogo />

          <div className="Header__icon-row col-xs-3 col-sm-2 col-md-2 col-lg-2">

            <div className="Header__cart-icon">
              <SVGIcon className="Header__svg" svg={cartIcon} width={18} height={18} fill="#153243"/>
            </div>

            <div className="Header__search-icon">
            <SVGIcon className="Header__svg" svg={searchIcon} width={15} height={18} fill="#153243" onTouchTap={this.handleSearchTap}/>
            </div>
          </div>

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
