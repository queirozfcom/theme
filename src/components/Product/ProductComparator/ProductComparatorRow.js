import React from 'react';

class ProductComparatorRow extends React.Component {
  render() {
    return (
      <tr>
        <td className="active">
          <strong>{this.props.title}</strong>
        </td>
        {
          this.props.values.map((value, i) => {
            return (<td className={ i % 2 ? 'odd-col' : '' } key={i}>{value}</td>);
          })
        }
      </tr>
    );
  }
}

export default ProductComparatorRow;
