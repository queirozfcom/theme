import React from 'react';
import ShelfSlider from './ShelfSlider';

class RecomendationShelf extends React.Component {
  static defaultProps = {
    settings: Immutable.fromJS({
      title: 'Destaques',
      category: 'fera-fashion',
      quantity: 10
    })
  }

  render() {
    return (
      <ShelfSlider id='recomendation' {...this.props} />
    );
  }
}

export default RecomendationShelf;
