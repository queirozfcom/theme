import { stores, connectToStores, register } from 'sdk';
import React from 'react';
import './Shelf.less';
import ShelfPlaceholder from './ShelfPlaceholder';
import ShelfSlider from './ShelfSlider';
import 'react-proxy?name=editors/ShelfEditor!./editor/ShelfEditor';

@register({
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
