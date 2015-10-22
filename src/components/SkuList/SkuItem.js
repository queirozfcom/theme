import React from 'react';

class SkuItem extends React.Component {
  render () {
    let sku = this.props.sku;
    let src = sku.images[0].src;
    return (
      <div>
        <img src={src}/>
        <h3>{ sku.name }</h3>
      </div>
    );
  }
}

export default SkuItem;
