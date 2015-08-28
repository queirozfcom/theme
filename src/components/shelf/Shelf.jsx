import { dispatcher, connectToStores, editable } from 'sdk';
import React from 'react';
import 'styles/components/shelf/Shelf.less';
import ShelfPlaceholder from './ShelfPlaceholder';
import ShelfSlider from './ShelfSlider';

@editable(dispatcher)
@connectToStores([
  dispatcher.stores.SearchStore
])
class Shelf extends React.Component {
  static storefront = {
    name: 'Shelf@vtex.storefront-theme',
    title: 'Shelf'
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
