import React from 'react';
import { dispatcher } from 'sdk';
import { FormattedNumber } from 'react-intl';

class Price extends React.Component {
  static defaultProps = {
    ContextStore: dispatcher.stores.ContextStore.getState()
  }

  static propTypes = {
    value: React.PropTypes.number.isRequired,
    ContextStore: React.PropTypes.object.isRequired
  }

  render() {
    let currency = this.props.ContextStore.getIn(['culture' ,'currency']);

    return (
      <FormattedNumber style="currency" value={this.props.value} currency={currency} />
    );
  }
}

export default Price;
