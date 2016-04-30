import React from 'react';
import { stores } from 'sdk';
import './FooterCategories.less';

const Link = stores.ComponentStore.getState().getIn(['Link@vtex.storefront-sdk', 'constructor']);

class FooterCategories extends React.Component {
  render() {
    return (
      <li className="FooterCategories">
        <Link to={`/${this.props.cat.get('slug')}/c`}>
          { this.props.cat.get('name') }
        </Link>
      </li>
    );
  }
}

export default FooterCategories;
