import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { stores } from 'sdk';
import HeaderTop from './HeaderTop';
import HeaderCart from './HeaderCart/HeaderCart';
import HeaderMenuToggle from './HeaderMenuToggle/HeaderMenuToggle';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderSearchComponent from './HeaderSearchComponent/HeaderSearchComponent';
import './style.less';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class Header extends React.Component {
  state = {
    isMenuOpen: false
  }

  handleMenuTap = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    let menu = this.state.isMenuOpen ?
      (
        <Placeholder
          id="navigation-menu"
          key="NavigationMenu"
          toggleMenu={this.handleMenuTap}
        />
      ) : null;

    return (
      <div className="Header">
        <HeaderTop />
        <div className="Header__inner clearfix row">
          <div className="col-xs-1 col-sm-1 hidden-md hidden-lg">
            <HeaderMenuToggle handleMenuTap={this.handleMenuTap} />
          </div>

          <div className="hidden-xs col-sm-4 col-md-4 col-lg-3">
            <HeaderLogo/>
          </div>

          <div className="col-sm-2 col-md-2 col-lg-2 pull-right">
            <HeaderCart />
          </div>

          <div className="col-md-4 col-lg-4 pull-right">
            <HeaderSearchComponent handleSearchTap={this.handleSearchTap} />
          </div>

          {/*<HeaderSearchButton handleSearchTap={this.handleSearchTap} />*/}
          {/*<Placeholder
            id="search-bar"
            visible={this.state.isSearchOpen}
            handleSearchTap={this.handleSearchTap}
          />*/}
          <ReactCSSTransitionGroup
            transitionName="NavigationMenu"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={250}
          >
            { menu }
          </ReactCSSTransitionGroup>
        </div>

        <div className="hidden-sm hidden-md hidden-lg">
          <HeaderLogo isMobile={true} />
          <hr/>
        </div>
      </div>
    );
  }
}

export default Header;
