import React from 'react';
import SkuItem from './SkuItem';

class SkuList extends React.Component {
  render() {
    let skus = this.props.skus;

    return (
      <div>
      {
        skus.map((sku) => {
          return (
            <SkuItem key={sku.id} sku={sku}/>
          );
        })
      }
      </div>
    );
  }
}

export default SkuList;
