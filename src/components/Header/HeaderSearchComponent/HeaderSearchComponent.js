import React from 'react';
import { stores } from 'sdk';
import HeaderSearchButton from './HeaderSearchButton/HeaderSearchButton.js';
import './HeaderSearchComponent.less';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class HeaderSearchComponent extends React.Component {
  state = {
    isSearchOpen: false
  }

  handleSearchTap = () => {
    this.setState({ isSearchOpen: !this.state.isSearchOpen });
  }

  render() {
    return (
      <div className="HeaderSearchComponent">
        <HeaderSearchButton handleSearchTap={this.handleSearchTap} />
        <div className="HeaderSearchComponent__search-bar pull-right hidden-md hidden-lg">
          {
            <Placeholder
              id="search-bar"
              visible={this.state.isSearchOpen}
              handleSearchTap={this.handleSearchTap}
            />
          }
        </div>
        <div className="HeaderSearchComponent__search-bar pull-right hidden-xs hidden-sm">
          {
            <Placeholder
              id="search-bar"
              visible={this.state.isSearchOpen}
              handleSearchTap={this.handleSearchTap}
            />
          }
        </div>
      </div>
    );
  }
}

export default HeaderSearchComponent;
