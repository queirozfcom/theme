import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Area } from 'sdk';
import './Header.less';
import { Link } from 'react-router';
import SVGIcon from 'utils/SVGIcon';
import hamburgerIcon from 'assets/icons/hamburger.svg';
import searchIcon from 'assets/icons/search.svg';
import cartIcon from 'assets/icons/cart.svg';

class Header extends React.Component {
  state = {
    isMenuOpen: false
  }

  handleMenuTap = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen});
  }

  render() {
    let menu = this.state.isMenuOpen ?
      (
        <Area
          id={`${this.props.areaPath}/menu`}
          key="Menu"
          toggleMenu={this.handleMenuTap}
        />
      ) : null;

    return (
      <div className="Header clearfix">
        <div className="col-xs-1" onTouchTap={this.handleMenuTap}>
          <SVGIcon className="Header__icon" svg={hamburgerIcon} width={18} height={18} fill="#153243"/>
        </div>

        <h1 className="Header__brand col-xs-8 col-xs-push-1">
          <Link to="/">Fera fashion</Link>
        </h1>

        <div className="col-xs-1">
          <SVGIcon className="Header__icon" svg={searchIcon} width={15} height={18} fill="#153243"/>
        </div>

        <div className="col-xs-1">
          <SVGIcon className="Header__icon" svg={cartIcon} width={18} height={18} fill="#153243"/>
        </div>

        <ReactCSSTransitionGroup
          transitionName="Menu"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={250}
        >
          { menu }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Header;
