import React from 'react';
import './ProductDescription.less';

class Description extends React.Component {
  render() {
    let description = this.props.description;
    function createMarkup() { return {__html: description }; };
    return (
      <div className="ProductDescription row">
          <div className="ProductDescription__text">
            <div dangerouslySetInnerHTML={ createMarkup() }></div>
          </div>
      </div>
    );
  }
}

export default Description;
