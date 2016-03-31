import React from 'react';
import { stores } from 'sdk';

const Link = stores.ComponentStore.getState().getIn(['Link@vtex.storefront-sdk', 'constructor']);

class Categories extends React.Component {
  render() {
    return (
      <li>
        <Link to={`/${this.props.cat.get('slug')}/c`}>
          { this.props.cat.get('name') }
        </Link>
      </li>
    );
  }
}

export default Categories;
