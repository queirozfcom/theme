import { dispatcher, connectToStores, editable } from 'sdk';
import React from 'react';
import 'styles/components/shelf/Shelf.less';
import ShelfPlaceholder from './ShelfPlaceholder';
import ShelfSlider from './ShelfSlider';

@connectToStores([
  dispatcher.stores.SearchStore,
  dispatcher.stores.ComponentStore
])
class Shelf extends React.Component {
  @editable
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
