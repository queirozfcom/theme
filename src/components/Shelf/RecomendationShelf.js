import React from 'react';
import ShelfSlider from './ShelfSlider';

class RecomendationShelf extends React.Component {
  static defaultProps = {
    settings: Immutable.fromJS({
      title: 'Quem comprou este produto também buscou por',
      category: 'fera-fashion',
      quantity: 5
    })
  }

  render() {
    return (
      <ShelfSlider id='recomendation'
       {...this.props}
       shouldShowDetails={false} />
    );
  }
}

export default RecomendationShelf;
