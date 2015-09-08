import { stores, connectToStores, storefront } from 'sdk';
import React from 'react';
import './Shelf.less';
import ShelfPlaceholder from './ShelfPlaceholder';
import ShelfSlider from './ShelfSlider';

@storefront({
  name: 'Shelf@vtex.storefront-theme',
  title: 'Shelf',
  editable: true
})
@connectToStores([
  stores.SearchStore
])
class Shelf extends React.Component {
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
