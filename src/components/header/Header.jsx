import React from 'react';
import style from 'styles/components/header/Header.less'; // eslint-disable-line

class Header extends React.Component {
  render() {
    return (
      <div className="header clearfix">
        <div className="col-xs-1">
          <div className="v-icon v-icon__hamburger"></div>
        </div>

        <h1 className="header-brand col-xs-8">
          Fera fashion
        </h1>

        <div className="col-xs-1">
          <div className="v-icon v-icon__search"></div>
        </div>

        <div className="col-xs-2">
          <div className="v-icon v-icon__cart"></div>
        </div>
      </div>
    );
  }
}

export default Header;
