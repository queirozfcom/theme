import React from 'react';
import { forEach } from 'lodash-compat/collection';

class ProductComparatorRow extends React.Component {
  render() {
    var lines = [];
    forEach(this.props.values, function(value, i){
      lines.push(<td className={ i % 2 ? 'odd-col' : '' }>{value}</td>);
    });

    return (
      <tr>
        <td className="active">
          <strong>{this.props.title}</strong>
        </td>
        {lines}
      </tr>
    );
  }
}

export default ProductComparatorRow;
