import React from 'react';
import { stores } from 'sdk';
const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class SearchPage extends React.Component {
  state = {
    grid: false
  }

  changeLayout = () => {
    this.setState({ grid: !this.state.grid });
  }

  render() {
    return (
      <div>
        <Placeholder
          id="search-header"
          searchTerm={this.props.params.searchTerm}
          grid={this.state.grid}
          location={this.props.location}
          changeLayout={this.changeLayout}
        />
        <Placeholder
          id="product-list"
          location={this.props.location}
          grid={this.state.grid}
        />
      </div>
    );
  }
}

export default SearchPage;
