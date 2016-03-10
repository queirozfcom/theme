import React from 'react';
import './CategoryListOption.less';
import { stores } from 'sdk';

const Link = stores.ComponentStore.getState().getIn(['Link@vtex.storefront-sdk', 'constructor']);

class CategoryListOption extends React.Component {
  render() {
    return (
      <li className="CategoryListOption">
        <Link
          to={this.props.slug}
          query={{ pageSize: 10 }}
          className="CategoryListOption__link"
        >
          { this.props.name }
        </Link>
      </li>
    );
  }
}

export default CategoryListOption;
