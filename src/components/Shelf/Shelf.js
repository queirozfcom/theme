import { stores, storefront, utils } from 'sdk';
import React from 'react';
import Immutable from 'immutable';
import './Shelf.less';
import ShelfPlaceholder from './ShelfPlaceholder';
import ShelfSlider from './ShelfSlider';

@storefront({
  name: 'Shelf@vtex.storefront-theme',
  title: 'Shelf',
  editable: true
})
@utils.connectToStores()
class Shelf extends React.Component {
  static getStores() {
    return [stores.SearchStore];
  }

  static getPropsFromStores() {
    return {
      SearchStore: stores.SearchStore.getState()
    };
  }

  static defaultProps = {
    settings: Immutable.fromJS({
      category: 'fera-fashion',
      quantity: 3
    })
  }

  render() {
    if (!this.props.settings) {
      return (
        <ShelfPlaceholder title="Destaques"/>
      )
    }
    return <ShelfSlider {...this.props}/>;
  }
}

export default Shelf;
