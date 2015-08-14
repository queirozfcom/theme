import React from 'react';
import { dispatcher } from 'sdk';
import { FormattedNumber } from 'react-intl';

class Price extends React.Component {
  static defaultProps = {
    ShopStore: dispatcher.stores.ShopStore.getState()
  }

  static propTypes = {
    value: React.PropTypes.number.isRequired,
    ShopStore: React.PropTypes.object.isRequired
  }

  render() {
    let currency = this.props.ShopStore.get('currency');

    return (
      <FormattedNumber style="currency" value={this.props.value} currency={currency} />
    );
  }
}

export default Price;
