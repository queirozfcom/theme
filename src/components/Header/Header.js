import React from 'react';
import './Header.less';
import { Link } from 'react-router';
import SVGIcon from 'utils/SVGIcon';
import hamburgerIcon from 'assets/icons/hamburger.svg';
import searchIcon from 'assets/icons/search.svg';
import cartIcon from 'assets/icons/cart.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="v-header clearfix">
        <div className="col-xs-1">
          <SVGIcon className="v-header__icon" svg={hamburgerIcon} width={18} height={18} fill="#153243"/>
        </div>

        <h1 className="v-header__brand col-xs-8">
          <Link to="home">Fera fashion</Link>
        </h1>

        <div className="col-xs-1">
          <SVGIcon className="v-header__icon" svg={searchIcon} width={15} height={18} fill="#153243"/>
        </div>

        <div className="col-xs-2">
          <SVGIcon className="v-header__icon" svg={cartIcon} width={18} height={18} fill="#153243"/>
        </div>
      </div>
    );
  }
}

export default Header;
