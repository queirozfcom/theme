import React from 'react';
import './ProductDescription.less';

class Description extends React.Component {
  render() {
    let description = this.props.description;
    return (
      <div className="ProductDescription row">
          <div className="ProductDescription__text">
            { description }
          </div>
      </div>
    );
  }
}

export default Description;
